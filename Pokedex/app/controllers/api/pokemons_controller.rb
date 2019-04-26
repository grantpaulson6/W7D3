class Api::PokemonsController < ApplicationController
    def index
        @pokemons = Pokemon.all
        render :index
    end
    
    def show
        @pokemon = Pokemon.find(params[:id])
        render :show
    end

    def create 
        @pokemon = Pokemon.new(poke_params)
        if @pokemon.save
            debugger
        render :show
        else
            redirect_to root_url
        end
    end

    private
    def poke_params
        params.require(:pokemon).permit(:name, :image_url, :poke_type, :attack, :defense)
    end
end
