from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, UserManager

from django.db import models


class User(AbstractBaseUser, PermissionsMixin):
    created = models.DateTimeField(auto_now_add=True)
    username = models.CharField(unique=True, max_length=255, null=False, blank=False)
    fullname = models.CharField(max_length=255, null=True, blank=True)
    email = models.EmailField(null=True, blank=True)

    phone_number = models.CharField(max_length=20, null=True, blank=True)
    address = models.CharField(max_length=255, null=True, blank=True)

    is_staff = models.BooleanField(
        'Staff Status',
        default=False,
        help_text=('Designates whether the user can log into this admin site.'),
    )
    is_active = models.BooleanField(
        'Active',
        default=True,
        help_text=(
            'Designates whether this user should be treated as active. '
            'Unselect this instead of deleting accounts.'
        ),
    )

    USERNAME_FIELD = 'username'
    objects = UserManager()
