from django.db import models

from datetime import date

class Task(models.Model):
    """Stores a task."""
    title = models.CharField(max_length=50)
    content = models.CharField(max_length=50)

    created_on = models.DateField(default=date.today)

    due_date = models.DateField(default=date.today)

    class Meta:
        ordering = ['id']

    def __str__(self):
        return self.title