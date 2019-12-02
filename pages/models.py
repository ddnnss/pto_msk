from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField
from pytils.translit import slugify
from random import choices
import string


class Banner(models.Model):
    order = models.IntegerField('Номер по порядку', default=1)
    bigText = models.CharField('Заголовок на баннере (70 символов)', max_length=70, blank=False, null=True)
    smallText = models.CharField('Описание на баннере (200 символов)', max_length=200, blank=False, null=True)
    image = models.ImageField('Картинка для баннера (1920 x 660)', upload_to='banners/', blank=True, null=True)
    buttonText = models.CharField('Надпись на первой кнопке', max_length=10, blank=False, null=True)
    buttonUrl = models.CharField('Ссылка с кнопки', max_length=100, blank=False, null=True)
    button1Text = models.CharField('Надпись на второй кнопке', max_length=10, blank=False, null=True)
    button1Url = models.CharField('Ссылка с второй кнопки', max_length=100, blank=False, null=True)
    isActive = models.BooleanField('Отображать ?', default=True)

    def __str__(self):
        return f'Баннер № П/П {self.order}'

    class Meta:
        verbose_name = "Баннер"
        verbose_name_plural = "Баннеры"



class Service(models.Model):
    name = models.CharField('Название услуги', max_length=255, blank=False, null=True)
    short_description = models.TextField('Краткое описание (380 символов)', blank=False)
    description = RichTextUploadingField('Полное описание услуги', blank=False, null=True)
    isHomeVisible = models.BooleanField('Отображать на главной?', default=True, db_index=True)
    nameSlug = models.CharField(max_length=255, blank=True, null=True)
    image = models.ImageField('Изображение превью (360 x 240)', upload_to='service_img/', blank=False)
    pageH1 = models.CharField('Тег H1', max_length=255, blank=True, null=True)
    pageTitle = models.CharField('Название страницы SEO', max_length=255, blank=True, null=True)
    pageDescription = models.CharField('Описание страницы SEO', max_length=255, blank=True, null=True)
    pageKeywords = models.TextField('Keywords SEO', blank=True, null=True)
    price = models.IntegerField('Стоимость услуги', default=0)
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
    customer = models.CharField('Название проекта', max_length=40, blank=True, null=True)
    name = models.CharField('Заказчик ', max_length=255, blank=False, null=True)
    image = models.ImageField('Изображение (360 x 240)', upload_to='service_img/', blank=True)
    town = models.CharField('Город', max_length=40, blank=True, null=True)

    def __str__(self):
        return 'Проект : %s ' % self.name

    class Meta:
        verbose_name = "Проект"
        verbose_name_plural = "Проекты"


class Callback(models.Model):
    name = models.CharField('Имя',max_length=255, blank=True, default='Нет данных')
    phone = models.CharField('Телефон', max_length=255, blank=True, default='Нет данных')
    email = models.CharField('Почта', max_length=255, blank=True, default='Нет данных')
    service = models.CharField('Услуга', max_length=255, blank=True, default='Нет данных')
    message = models.TextField('Сообщение', blank=True, default='Нет данных')
    created_at = models.DateTimeField('Дата заполнения', auto_now_add=True)


    def __str__(self):
        return 'Форма заказа звонка. Заполнена {}'.format(self.created_at)



    class Meta:
        verbose_name = "Форма заказа звонка"
        verbose_name_plural = "Формы заказа звонка"


class SeoTag(models.Model):
    indexTitle = models.CharField('Тег Title для главной', max_length=255, blank=True, null=True)
    indexDescription = models.CharField('Тег Description для главной', max_length=255, blank=True, null=True)
    indexKeywords = models.TextField('Тег Keywords для главной', blank=True, null=True)
    servicesTitle = models.CharField('Тег Title для страницы со всеми услугами', max_length=255, blank=True, null=True)
    servicesDescription = models.CharField('Тег Description для страницы со всеми услугам', max_length=255, blank=True,
                                           null=True)
    servicesKeywords = models.TextField('Тег Keywords для страницы со всеми услугам', blank=True, null=True)
    projectsTitle = models.CharField('Тег Title для страницы со всеми проектами', max_length=255, blank=True, null=True)
    projectsDescription = models.CharField('Тег Description для страницы со всеми проектами', max_length=255, blank=True,
                                        null=True)
    projectsKeywords = models.TextField('Тег Keywords для страницы со всеми проектами', blank=True, null=True)

    contactTitle = models.CharField('Тег Title для страницы контакты', max_length=255, blank=True, null=True)
    contactDescription = models.CharField('Тег Description для страницы контакты', max_length=255, blank=True,
                                        null=True)
    contactKeywords = models.TextField('Тег Keywords для страницы контакты', blank=True, null=True)

    aboutTitle = models.CharField('Тег Title для страницы о компании', max_length=255, blank=True, null=True)
    aboutDescription = models.CharField('Тег Description для страницы о компании', max_length=255, blank=True,
                                        null=True)
    aboutKeywords = models.TextField('Тег Keywords для страницы о компании', blank=True, null=True)

    yandexMetrika = models.TextField('Код Яндекс метрики', blank=True, null=True)
    fbPixel = models.TextField('Код пикселя', blank=True, null=True)
    yandexTAG = models.CharField('Код подтверждения Яндекс', max_length=255, blank=True, null=True)
    googleTAG = models.CharField('Код подтверждения google', max_length=255, blank=True, null=True)

    def __str__(self):
        return 'Теги для статических страниц'

    class Meta:
        verbose_name = "Теги для статических страниц"
        verbose_name_plural = "Теги для статических страниц"