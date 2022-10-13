class ApplicationController < ActionController::API
  include ActionController::Cookies
rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found
rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

    def encode_token(payload)
        JWT.encode(payload, "secret")
    end

    def decode_token
        auth_header =  request.headers['Authorization']

        if auth_header
            token = auth_header.split(' ')[1]
            begin
                JWT.decode(token, "secret", true, algorithm: 'HS256')
            rescue JWT::DecodeError
                nil
            end
        end
    end

    def authorised_user
        decoded_token = decode_token()
        if decoded_token
            user_id = decoded_token[0]['id']
            user = User.find_by(id: user_id)
        end
    end

    def authorize
        render json: {message: "Unauthorized"}, status: :unauthorized unless
        authorised_user
    end


private
def render_record_not_found
  render json: {error: "Not Found"}, status: :not_found
end

def render_record_invalid(e)
  render json: {errors: e.record.errors.full_messages},status: :unprocessable_entity
end

end
