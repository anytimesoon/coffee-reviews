class RoastersController < ApplicationController
	def index
		roasters = Roaster.all
		# binding.pry
		render json: RoasterSerializer.new(roasters).serializable_hash
	end

	def show
		roaster = Roaster.find(params[:id])
		# binding.pry
		render json: RoasterSerializer.new(roaster).serializable_hash
	end
end
