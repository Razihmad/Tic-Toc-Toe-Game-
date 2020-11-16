import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','leveltwo.settings')


import django
django.setup()
from myapp.models import Userss
from faker import Faker

fake = Faker()

def add_users(n = 20):
    for i in range(n):
        first = fake.first_name()
        last = fake.last_name()
        email = fake.email()
        u = Userss.objects.get_or_create(first_name=first,last_name=last,email= email)[0]
        u.save()

if __name__ == "__main__":
    print("populating ")
    add_users(50)
    print("populating complete")

