from django.db import models

# Create your models here.
class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=5, decimal_places=2)
    stock = models.IntegerField()
    image = models.ImageField(upload_to='shop/images', default='shop/images/default.jpg')

    def __str__(self):
        return self.name