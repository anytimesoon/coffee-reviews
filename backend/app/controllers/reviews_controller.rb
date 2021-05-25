class ReviewsController < ApplicationController
  def create
  	review = Review.create(content: params[:review][:content], coffee_id: params[:review][:coffee_id])

  	render json: ReviewSerializer.new(review).serializable_hash
  end
end
