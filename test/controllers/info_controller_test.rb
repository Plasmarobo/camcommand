require 'test_helper'

class InfoControllerTest < ActionController::TestCase
  test "should get tos" do
    get :tos
    assert_response :success
  end

  test "should get privacy" do
    get :privacy
    assert_response :success
  end

  test "should get support" do
    get :support
    assert_response :success
  end

end
