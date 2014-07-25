class CommandsController < ApplicationController
  protect_from_forgery only: :clear

  def new
    params[:time] = Time.new.to_i
    cmd = Command.new command_params
    if cmd.save
      result = "Success!"
      status = 200
    else
      result = "Unknown Failure"
      status = 400
    end
    
    render text: result, status: status
  end

  def clear
    if params[:confirm] == "yes"
      Command.delete_all
      render text: "Cleared"
    else 
      if params[:confirm] == "no"
        redirect_to :list
      end
    end
  end

  def list
    if params.has_key?(:time)
      @commands = Command.where("time > #{params[:time]}")
    else
      @commands = Command.all
    end

    respond_to do |format|
      format.html { render :list, status: 200}
      format.json { render json: @commands.map(&:toHash), status: 200}
      format.txt do
        content = "".force_encoding("ASCII")
        @commands.each { |cmd| content += cmd.toASCII } 
        render text: content, status: 200
      end
    end
  end

  private
    def command_params
      params.permit(:command, :time)
    end
end
