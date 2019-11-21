from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
from pytils.translit import slugify
from random import choices
import string


class Banner(models.Model):
    order = models.IntegerField('Номер по порядку', default=1)
    bigText = models.CharField('Заголовок на баннере (70 символов)', max_length=70, blank=False, null=True)
    smallText = models.CharField('Описание на баннере (200 символов)', max_length=200, blank=False, null=True)
    image = models.ImageField('Картинка для баннера (1920 x 660)', upload_to='banners/', blank=True)
    buttonText = models.CharField('Надпись на первой кнопке', max_length=10, blank=False)
    buttonUrl = models.CharField('Ссылка с кнопки', max_length=100, blank=False)
    isActive = models.BooleanField('Отображать ?', default=True)

    def __str__(self):
        return f'Баннер № П/П {self.order}'

    class Meta:
        verbose_name = "Баннер"
        verbose_name_plural = "Баннеры"



class Service(models.Model):
    name = models.CharField('Название услуги', max_length=40, blank=False, null=True)
    short_description = models.TextField('Краткое описание (380 символов)', blank=False)
    description = RichTextUploadingField('Полное описание услуги', blank=False, null=True)
    isHomeVisible = models.BooleanField('Отображать на главной?', default=True, db_index=True)
    nameSlug = models.CharField(max_length=255, blank=True, null=True)
    image = models.ImageField('Изображение превью для главной (360 x 240)', upload_to='service_img/', blank=False)
    pageH1 = models.CharField('Тег H1', max_length=255, blank=True, null=True)
    pageTitle = models.CharField('Название страницы SEO', max_length=255, blank=True, null=True)
    pageDescription = models.CharField('Описание страницы SEO', max_length=255, blank=True, null=True)
    pageKeywords = models.TextField('Keywords SEO', blank=True, null=True)
    views = models.IntegerField('Просмотров', default=0)
    isActive = models.BooleanField('Активная услуга?', default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        slug = slugify(self.name)
        testSlug = Service.objects.filter(nameSlug=slug)
        slugRandom = ''
        if testSlug:
            slugRandom = '-' + ''.join(choices(string.ascii_lowercase + string.digits, k=2))
        self.nameSlug = slug + slugRandom
        self.name_lower = self.name.lower()
        super(Service, self).save(*args, **kwargs)

    def get_absolute_url(self):
        return f'/service/{self.nameSlug}/'

    def __str__(self):
        return 'Услуга : %s ' % self.name

    class Meta:
        verbose_name = "Услуга"
        verbose_name_plural = "Услуги"


class Project(models.Model):
    name = models.CharField('Название проекта (30 символов)', max_length=30, blank=False, null=True)
    image = models.ImageField('Изображение (360 x 240)', upload_to='service_img/', blank=True)
    customer = models.CharField('Заказчик', max_length=40, blank=False, null=True)
    town = models.CharField('Город', max_length=40, blank=False, null=True)

    def __str__(self):
        return 'Проект : %s ' % self.name

    class Meta:
        verbose_name = "Проект"
        verbose_name_plural = "Проекты"
