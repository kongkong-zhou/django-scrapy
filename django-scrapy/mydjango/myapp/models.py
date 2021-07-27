from django.db import models

# Create your models here.
class Classification(models.Model):
    classify_name = models.CharField(max_length=50,blank=True,null=True)
    classify_tag = models.CharField(max_length=50,blank=True,null=True)

    class Meta:
        ordering = ['classify_name']

    def __str__(self):
        return self.classify_name

class Movieapi(models.Model):
    img = models.CharField(max_length=225, blank=True, null=True)
    image_paths = models.CharField(max_length=225,blank=True,null=True)
    name = models.CharField(max_length=255,unique=True)
    hd = models.CharField(max_length=25, blank=True, null=True)
    score = models.CharField(max_length=10, blank=True, null=True)
    other_name = models.CharField(max_length=100, blank=True, null=True)

    director = models.CharField(max_length=25, blank=True, null=True)
    actors = models.CharField(max_length=225, blank=True, null=True)
    serialize = models.CharField(max_length=100, blank=True, null=True)
    area = models.CharField(max_length=10, blank=True, null=True)
    language = models.CharField(max_length=10, blank=True, null=True)

    release_time = models.CharField(max_length=25, blank=True, null=True)
    update_time = models.CharField(max_length=25, blank=True, null=True)
    info = models.TextField(blank=True, null=True)
    classification = models.ManyToManyField(Classification)

    class Meta:
        ordering = ['name']

    def __str__(self):
        return self.name

class Video(models.Model):
    movie = models.ForeignKey(Movieapi,related_name="movieofvideo",on_delete=models.CASCADE)
    video_url = models.CharField(max_length=225,blank=True,null=True)
    name = models.CharField(max_length=225,blank=True,null=True)

    class Meta:
        ordering = ['video_url']

    def __str__(self):
        return self.video_url

class VideoYun(models.Model):
    movie = models.ForeignKey(Movieapi,related_name="movieofvideoyun",on_delete=models.CASCADE)
    video_url = models.CharField(max_length=225,blank=True,null=True)
    name = models.CharField(max_length=225, blank=True, null=True)
    class Meta:
        ordering = ['video_url']

    def __str__(self):
        return self.video_url

