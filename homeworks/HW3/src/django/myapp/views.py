# Import the modules
from django.http import HttpResponse
import random
import math


# Create a view function
def handler(request):
    # Define two values
    n = int(request.GET.get("n", 2))  # Default to 2 if not present in query parameters
    k = int(request.GET.get("k", 1))  # Default to 1 if not present in query parameters

    # Generate a random n-digit number
    number = random.randint(0, math.pow(10, n) - 1)

    # Check if the number starts with k zeros
    while number // math.pow(10, n - k) != 0:
        # If not, generate a new number
        number = random.randint(0, math.pow(10, n) - 1)

    # Write the number to the response as a string, padded with zeros if needed
    return HttpResponse(f"{number:0{n}d}\n")
