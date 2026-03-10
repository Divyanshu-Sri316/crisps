from app.core.security import create_access_token


def generate_token(user_id):

    return create_access_token({"sub": str(user_id)})