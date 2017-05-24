json.extract! location,
  :id, :title, :description, :lat, :lng,
  :owner_id, :street_address1, :street_address2,
  :city, :state, :zip, :archived

json.reviews location.reviews.length
json.pictures location.pictures
json.rating location.reviews.length > 0 ? location.reviews.map(&:rating).sum / location.reviews.length : "none"
json.ownerUrl location.owner.pictures.length > 0 ? location.owner.pictures.last.url : ""
