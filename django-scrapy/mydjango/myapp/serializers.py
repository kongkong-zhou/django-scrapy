from rest_framework import serializers
from . import models

class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("id","video_url","name")
        model = models.Video

class VideoYunSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("id","video_url","name")
        model = models.Video

class ClassificationSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ("classify_name","classify_tag")
        model = models.Classification

class MovieSerializer(serializers.ModelSerializer):
    movieofvideo = VideoSerializer(many=True,read_only=True)
    movieofvideoyun = VideoYunSerializer(many=True,read_only=True)
    classification = ClassificationSerializer(many=True,read_only=True)

    class Meta:
        model = models.Movieapi
        fields = ("id","classification","img","name","hd","score","other_name","director","actors","serialize",
                  "area","language","release_time","update_time","info","image_paths","movieofvideo","movieofvideoyun")


