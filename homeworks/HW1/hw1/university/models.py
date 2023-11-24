from django.db import models
from django.core.validators import MaxValueValidator,MinValueValidator

# Create your models here.
MAJOR_CHOICES=[
    ('cs', 'Computer Science'),
    ('ee', 'Electrical Engineering'),
    ('me', 'Mechanical Engineering'),
    ('ce', 'Civil Engineering'),
    ('ch', 'Chemical Engineering')
]



class Student(models.Model):
    first_name=models.CharField(max_length=20, blank=False, null=False)
    last_name=models.CharField(max_length=20, blank=False, null=False)
    student_number=models.IntegerField(unique=True, blank=False, null=False)
    enrollment_year=models.IntegerField(validators=[MinValueValidator(2000),MaxValueValidator(2100)], blank=False, null=False)
    major=models.CharField(max_length=20, choices=MAJOR_CHOICES)

    def __str__(self):
        return self.first_name + " " + self.last_name

    

class Professor(models.Model):
    first_name=models.CharField(max_length=20, blank=False, null=False)
    last_name=models.CharField(max_length=20, blank=False, null=False)
    staff_number=models.IntegerField(unique=True, blank=False, null=False)
    hiring_date=models.DateField()
    department=models.ForeignKey('Department', related_name='proftodep', on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.first_name + " " + self.last_name


class Department(models.Model):
    name=models.CharField(max_length=20, unique=True, blank=False, null=False)
    head_of_department=models.ForeignKey(Professor, related_name='deptoprof', on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return self.name
    

class Classroom(models.Model):
    class_number=models.IntegerField(unique=True, blank=False, null=False)
    capacity=models.IntegerField(validators=[MinValueValidator(1),MaxValueValidator(100)], blank=False, null=False)
    location=models.CharField(max_length=20)
    projector=models.BooleanField()
    department=models.ForeignKey(Department, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.class_number) + " " + self.location



class Course(models.Model):
    course_name=models.CharField(max_length=20, blank=False, null=False)
    course_code=models.CharField(max_length=20, unique=True, blank=False, null=False)
    unit_count=models.IntegerField(validators=[MinValueValidator(1),MaxValueValidator(5)])
    offered_by=models.ForeignKey(Professor, on_delete=models.CASCADE)
    offered_in=models.ForeignKey(Department, on_delete=models.CASCADE)

    def __str__(self):
        return self.course_name + " " + self.course_code


class Enrollment(models.Model):
    Student=models.ForeignKey(Student, on_delete=models.CASCADE)
    Course=models.ForeignKey(Course, on_delete=models.CASCADE)
    semester=models.TextField(max_length=20)

    def __str__(self):
        return self.Student.first_name + " " + self.Student.last_name + " " + self.Course.course_name + " " + self.semester


    
class Schedule(models.Model):
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    time=models.TextField(max_length=20)

    def __str__(self):
        return str(self.classroom.class_number) + " " + self.course.course_name + " " + self.time

class Assignment(models.Model):
    course=models.ForeignKey(Course, on_delete=models.CASCADE)
    name=models.CharField(max_length=20)
    deadline=models.DateField()

    def __str__(self):
        return self.course.course_name + " " + self.name