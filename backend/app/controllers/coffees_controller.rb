class CoffeesController < ApplicationController
	def index
		coffees = Coffee.all
		
		render json: CoffeeSerializer.new(coffees).serializable_hash
	end

	def show
		coffee = Coffee.find(params[:id])
		options = {include: [:reviews]}
		
		render json: CoffeeSerializer.new(coffee, options).serializable_hash
	end
end
