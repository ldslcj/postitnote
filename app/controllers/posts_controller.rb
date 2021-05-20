class PostsController < ApplicationController
  def index
    @posts = Post.all
    render component: "Posts", props:{posts:@posts}
  end

  def show
    @post = Post.find(params[:id])
    render component: "Post", props:{post: @post}
  end


  def new
    render component: "PostNew"
  end

  def create
    post = Post.new(post_params)
    if post.save
      redirect_to posts_path
    else
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    redirect_to posts_path
  end 
  
  def edit
    @post = Post.find(params[:id])
    render component: "PostEdit", props:{post: @post}
  end

  def update
    @post = Post.find(params[:id])
    if (@post.update(post_params))
      redirect_to posts_path
    else
    end
  end



  private

  def post_params
      params.require(:post).permit(:title, :description)
  end

end
