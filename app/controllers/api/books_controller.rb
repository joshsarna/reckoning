class Api::BooksController < ApplicationController
  def index
    # @books = Book.all
    @books = Book.where(user_id: current_user.id, completed_status: false)
    render 'index.json.jbuilder'
  end

  def create
    @book = Book.new(
      name: params[:name],
      author: params[:author],
      pages: params[:pages],
      due_date: params[:due_date],
      completed_status: false,
      user_id: current_user.id
    )
    @book.save
    render 'show.json.jbuilder'
  end

  def show
    @book = Book.find(params[:id])
    render 'show.json.jbuilder'
  end

  def update
    @book = Book.find(params[:id])
    @book.update(
      name: params[:name] || @book.name,
      author: params[:author] || @book.author,
      pages: params[:pages] || @book.pages,
      due_date: params[:due_date] || @book.due_date,
      completed_status: params[:completed_status] || @book.completed_status
    )
    render 'show.json.jbuilder'
  end

  def destroy
    @book = Book.find(params[:id])
    @book.destroy
    render json: { message: 'You have deleted this book' }
  end
end
