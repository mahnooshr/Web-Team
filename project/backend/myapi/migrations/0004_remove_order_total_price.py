# Generated by Django 5.0.1 on 2024-02-05 16:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapi', '0003_alter_category_image_alter_product_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='total_price',
        ),
    ]