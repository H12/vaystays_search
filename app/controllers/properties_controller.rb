class PropertiesController < ApplicationController
  def index
    @properties = Property.order(tiebreaker_sort: :desc)
  end

  def show
    @property = Property.find(params[:id])
  end
end
