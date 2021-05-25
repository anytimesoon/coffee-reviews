class ReviewsController < ApplicationController
  def create
  	review = Review.create(author: params[:review][:author], content: params[:review][:content], coffee_id: params[:review][:coffee_id])

  	render json: ReviewSerializer.new(review).serializable_hash
  end
end
