from django.db import models

# Create your models here.

class DataTable(models.Model):
    RELATIONSHIP_CHOICE=[
        ('Single', 'Single'),
        ('Couple', 'Couple'),
        ('Married', 'Married'),
        ('Visitor', 'Visitor')

    ]
    name=models.CharField(max_length=255)
    address=models.CharField(max_length=255)
    cell_number=models.IntegerField()
    Relationship=models.CharField(max_length=10, choices=RELATIONSHIP_CHOICE, default='Single')

    def __str__(self):
        return self.name

