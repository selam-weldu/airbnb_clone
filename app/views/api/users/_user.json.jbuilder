json.extract! user, :id, :username, :fname, :bio
json.photoUrl url_for(user.photo) if user.photo.attached?




