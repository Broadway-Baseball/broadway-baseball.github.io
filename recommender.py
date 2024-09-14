# Importing Libraries
import numpy as np
import pandas as pd
from sklearn.neighbors import NearestNeighbors
import matplotlib.pyplot as plt
import seaborn as sns
import warnings
warnings.simplefilter(action='ignore', category=FutureWarning)

#loading rating dataset
ratings = pd.read_csv("/MusicalRecommendations - Ratings (2).csv")

# loading musical dataset
musicals = pd.read_csv("/MusicalRecommendations - Musicals (2).csv")

n_ratings = len(ratings)
n_musicals = len(ratings['MusicalID'].unique())
n_users = len(ratings['UserID'].unique())

print(f"Number of ratings: {n_ratings}")
print(f"Number of unique MusicalIDs: {n_musicals}")
print(f"Number of unique users: {n_users}")
# print(f"Average ratings per user: {round(n_ratings/n_users, 2)}")
print(f"Average ratings per musical: {round(n_ratings/n_musicals, 2)}")

user_freq = ratings[['UserID', 'MusicalID']].groupby(
    'UserID').count().reset_index()
user_freq.columns = ['UserID', 'n_ratings']
print(user_freq.head())

# Find Lowest and Highest rated musicals:
mean_rating = ratings.groupby('MusicalID')[['Rating']].mean()
# Lowest rated musicals
lowest_rated = mean_rating['Rating'].idxmin()
musicals.loc[musicals['MusicalID'] == lowest_rated]
# Highest rated musicals
highest_rated = mean_rating['Rating'].idxmax()
musicals.loc[musicals['MusicalID'] == highest_rated]
# show number of people who rated musicals rated musical highest
ratings[ratings['MusicalID']==highest_rated]
# show number of people who rated musicals rated musical lowest
ratings[ratings['MusicalID']==lowest_rated]

## the above musicals has very low dataset. We will use bayesian average
musical_stats = ratings.groupby('MusicalID')[['Rating']].agg(['count', 'mean'])
musical_stats.columns = musical_stats.columns.droplevel()

# Now, we create user-item matrix using scipy csr matrix
from scipy.sparse import csr_matrix

def create_matrix(df):

    N = len(df['UserID'].unique())
    M = len(df['MusicalID'].unique())

    # Map Ids to indices
    user_mapper = dict(zip(np.unique(df["UserID"]), list(range(N))))
    musical_mapper = dict(zip(np.unique(df["MusicalID"]), list(range(M))))

    # Map indices to IDs
    user_inv_mapper = dict(zip(list(range(N)), np.unique(df["UserID"])))
    musical_inv_mapper = dict(zip(list(range(M)), np.unique(df["MusicalID"])))

    user_index = [user_mapper[i] for i in df['UserID']]
    musical_index = [musical_mapper[i] for i in df['MusicalID']]

    X = csr_matrix((df["Rating"], (musical_index, user_index)), shape=(M, N))

    return X, user_mapper, musical_mapper, user_inv_mapper, musical_inv_mapper

X, user_mapper, musical_mapper, user_inv_mapper, musical_inv_mapper = create_matrix(ratings)

# Additional data for content-based filtering
musical_features_data = {
    'MusicalID': [],
'Composer': [],
'Lyricist': []
}
musical_features_df = pd.DataFrame(musical_features_data)

# One-hot encoding and normalization
musical_features_df = pd.get_dummies(musical_features_df, columns=['Composer', 'Lyricist'])


"""
Find similar musicals using KNN
"""
def find_similar_musicals(musical_id, X, k, metric='cosine', show_distance=False):

    neighbour_ids = []

    musical_ind = musical_mapper[musical_id]
    musical_vec = X[musical_ind]
    k+=1
    kNN = NearestNeighbors(n_neighbors=k, algorithm="brute", metric=metric)
    kNN.fit(X)
    musical_vec = musical_vec.reshape(1,-1)
    neighbour = kNN.kneighbors(musical_vec, return_distance=show_distance)
    for i in range(0,k):
        n = neighbour.item(i)
        neighbour_ids.append(musical_inv_mapper[n])
    neighbour_ids.pop(0)
    return neighbour_ids


musical_titles = dict(zip(musicals['MusicalID'], musicals['Musical']))

musical_id = 3

similar_ids = find_similar_musicals(musical_id, X, k=10)
musical_title = musical_titles[musical_id]

print(f"Since you watched {musical_title}")
for i in similar_ids:
    print(musical_titles[i])

def recommend_musicals_for_user(user_id, X, user_mapper, musical_mapper, musical_inv_mapper, k=10):
    df1 = ratings[ratings['UserID'] == user_id]

    if df1.empty:
        print(f"User with ID {user_id} does not exist.")
        return

    musical_id = df1[df1['Rating'] == max(df1['Rating'])]['MusicalID'].iloc[0]

    musical_titles = dict(zip(musicals['MusicalID'], musicals['Musical']))

    similar_ids = find_similar_musicals(musical_id, X, k)
    musical_title = musical_titles.get(musical_id, "musical not found")

    if musical_title == "musical not found":
        print(f"musical with ID {musical_id} not found.")
        return

    print(f"Since you watched {musical_title}, you might also like:")
    for i in similar_ids:
        print(musical_titles.get(i, "musical not found"))


def hybrid_recommendation(user_id, num_recommendations):
    # Collaborative Filtering Predictions
    cf_predictions = recommend_musicals_for_user(user_id, num_recommendations)

    # Content-Based Predictions
    cb_predictions = predict_content_based(user_id, musical_features_df, user_profiles)

    # Averaging the Scores
    hybrid_predictions = (cf_predictions + cb_predictions) / 2

    # Filtering out already interacted items
    already_interacted = set(df[df['UserID'] == user_id]['MusicalID'])
    hybrid_predictions = hybrid_predictions[~hybrid_predictions.index.isin(already_interacted)]

    return hybrid_predictions.sort_values(ascending=False).head(num_recommendations)
