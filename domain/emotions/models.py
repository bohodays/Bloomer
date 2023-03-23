from django.db import models

# Create your models here.
class Member(models.Model):
    user_id = models.AutoField(primary_key=True)
    nickname = models.CharField(max_length=30)
    password = models.CharField(max_length=100)
    img = models.IntegerField()
    refresh_token = models.CharField(max_length=100)
    email = models.EmailField(max_length=40)
    classic = models.SmallIntegerField(default=False)
    jazz = models.SmallIntegerField(default=False)
    pop = models.SmallIntegerField(default=False)
    reggae = models.SmallIntegerField(default=False)
    RnB = models.SmallIntegerField(default=False)
    electronic = models.SmallIntegerField(default=False)

    class Meta:
        db_table = 'member'