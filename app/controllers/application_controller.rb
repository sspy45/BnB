class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :signed_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def login!(user)
    session[:session_token] = user.session_token
  end

  def signed_in?
    !!current_user
  end

  def require_signed_in!
    render "/" unless signed_in?
  end
end
