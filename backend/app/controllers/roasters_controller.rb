class RoastersController < ApplicationController
	def index
		roasters = Roaster.all
		
		render json: RoasterSerializer.new(roasters).serializable_hash
	end

	def show
		roaster = Roaster.find(params[:id])
		options = {include: [:coffees]}
		
		render json: RoasterSerializer.new(roaster, options).serializable_hash
	end
end
