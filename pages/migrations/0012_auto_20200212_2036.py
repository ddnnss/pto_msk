# Generated by Django 2.2.7 on 2020-02-12 17:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0011_auto_20200212_1259'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='image',
            field=models.ImageField(blank=True, upload_to='project_img/', verbose_name='Изображение (360 x 240)'),
        ),
        migrations.CreateModel(
            name='ProjectImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(null=True, upload_to='project_img/', verbose_name='Фото')),
                ('image_small', models.CharField(blank=True, default='', max_length=255)),
                ('project', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='pages.Project', verbose_name='Фото для проекта')),
            ],
            options={
                'verbose_name': 'Фото для проекта',
                'verbose_name_plural': 'Фото для проекта',
            },
        ),
    ]
