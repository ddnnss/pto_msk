# Generated by Django 2.2.7 on 2019-12-16 15:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0007_auto_20191202_2128'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='pageSpecialText',
            field=models.CharField(blank=True, max_length=255, null=True, verbose_name='Специальное предложение'),
        ),
    ]