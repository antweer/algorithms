import math

def polysum(n,s):
    """
    input n,s the number of sides and length of each side, respectively
    outputs the sum of the polygons area and the square of the polygons perimeter
    """
    area = (.25*n*s**2)/math.tan(math.pi/n)
    square = (n*s)**2
    sum = area + square
    return float("{:10.4f}".format(sum)) 