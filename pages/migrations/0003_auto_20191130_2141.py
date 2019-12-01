# Generated by Django 2.2.7 on 2019-11-30 18:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0002_auto_20191121_2151'),
    ]

    operations = [
        migrations.CreateModel(
            name='SeoTag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('indexTitle', models.CharField(blank=True, max_length=255, null=True, verbose_name='Тег Title для главной')),
                ('indexDescription', models.CharField(blank=True, max_length=255, null=True, verbose_name='Тег Description для главной')),
                ('indexKeywords', models.TextField(blank=True, null=True, verbose_name='Тег Keywords для главной')),
                ('servicesTitle', models.CharField(blank=True, max_length=255, null=True, verbose_name='Тег Title для страницы со всеми услугами')),
                ('servicesDescription', models.CharField(blank=True, max_length=255, null=True, verbose_name='Тег Description для страницы со всеми услугам')),
                ('servicesKeywords', models.TextField(blank=True, null=True, verbose_name='Тег Keywords для страницы со всеми услугам')),
                ('projectsTitle', models.CharField(blank=True, max_length=255, null=True, verbose_name='Тег Title для страницы со всеми статьями')),
                ('projectsDescription', models.CharField(blank=True, max_length=255, null=True, verbose_name='Тег Description для страницы со всеми статьями')),
                ('projectsKeywords', models.TextField(blank=True, null=True, verbose_name='Тег Keywords для страницы со всеми статьями')),
                ('contactTitle', models.CharField(blank=True, max_length=255, null=True, verbose_name='Тег Title для страницы о компании')),
                ('contactDescription', models.CharField(blank=True, max_length=255, null=True, verbose_name='Тег Description для страницы о компании')),
                ('contactKeywords', models.TextField(blank=True, null=True, verbose_name='Тег Keywords для страницы о компании')),
                ('yandexMetrika', models.TextField(blank=True, null=True, verbose_name='Код Яндекс метрики')),
                ('fbPixel', models.TextField(blank=True, null=True, verbose_name='Код пикселя')),
                ('yandexTAG', models.CharField(blank=True, max_length=255, null=True, verbose_name='Код подтверждения Яндекс')),
                ('googleTAG', models.CharField(blank=True, max_length=255, null=True, verbose_name='Код подтверждения google')),
            ],
            options={
                'verbose_name': 'Теги для статических страниц',
                'verbose_name_plural': 'Теги для статических страниц',
            },
        ),
        migrations.AlterField(
            model_name='project',
            name='customer',
            field=models.CharField(blank=True, max_length=40, null=True, verbose_name='Заказчик'),
        ),
        migrations.AlterField(
            model_name='project',
            name='name',
            field=models.CharField(max_length=255, null=True, verbose_name='Название проекта '),
        ),
        migrations.AlterField(
            model_name='project',
            name='town',
            field=models.CharField(blank=True, max_length=40, null=True, verbose_name='Город'),
        ),
        migrations.AlterField(
            model_name='service',
            name='name',
            field=models.CharField(max_length=255, null=True, verbose_name='Название услуги'),
        ),
    ]