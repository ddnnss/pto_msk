# Generated by Django 2.2.7 on 2020-02-20 09:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0012_auto_20200212_2036'),
    ]

    operations = [
        migrations.AlterField(
            model_name='banner',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='slides/', verbose_name='Картинка для баннера (1920 x 660)'),
        ),
    ]