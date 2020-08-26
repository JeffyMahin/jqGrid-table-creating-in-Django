from django.shortcuts import render
from .models import DataTable

# Create your views here.

def index(request):
    data=DataTable.objects.all()
    context={
        'data': data,
    }
    return render(request, "index.html", context)
