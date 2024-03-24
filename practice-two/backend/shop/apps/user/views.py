from rest_framework import viewsets, permissions, authentication, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from .models import User
from .serializers import UserSerializer, UserCreateSerializer
from shop.apps.common.exceptions import HttpResponseLoginError, HttpResponseValidationError

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticated, )
    authentication_classes = (authentication.TokenAuthentication, )

    @action(methods=['post'], detail=False, url_path='registration',
            permission_classes=(permissions.AllowAny,),
            authentication_classes=())
    def registration(self, request, *args, **kwargs):
        user_serializer = UserCreateSerializer(data=request.data)
        if user_serializer.is_valid():
            user = user_serializer.save()
            user.set_password(user_serializer.validated_data.get('password'))
            user.save()

            return Response({
                'user': UserSerializer(
                    user, many=False, context={'request': request}).data,
                'token': None
            }, status=status.HTTP_200_OK)

        raise HttpResponseValidationError(user_serializer.errors)

    @action(methods=['post'], detail=False, url_path='login',
            permission_classes=(permissions.AllowAny,),
            authentication_classes=())
    def login(self, request, *args, **kwargs):
        request_data = request.data
        username = request_data.get('username')
        password = request_data.get('password')
        user = User.objects.filter(username=username).first()
        print(f'-- user: {user}')

        if not username or not password or not user:
            raise HttpResponseLoginError()

        if user.check_password(password):
            Token.objects.filter(user=user).delete()
            token = Token.objects.create(user=user)

            return Response({
                "user": self.get_serializer(user).data,
                "token": f'Token {token}' if token else None
            }, status=status.HTTP_200_OK)

        raise HttpResponseLoginError()
