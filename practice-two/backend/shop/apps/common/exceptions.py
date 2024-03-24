from rest_framework.exceptions import APIException
from rest_framework import status


class HttpResponseLoginError(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = 'Incorrect email/password'


class HttpResponseValidationError(APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = 'Validation Error'

