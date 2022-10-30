import cv2
import matplotlib.pyplot as plt
import numpy as np

image=cv2.imread("ManuscriptGrey.jpg",0)
if image is None:
    print("coluld not load image")
equ=cv2.equalizeHist(image)
cv2.imwrite("sergey-qualizedhist.png",equ)
# Download from moodle the image "ManuscriptGrey.jpg"
#The focus of this exercise is to experiment with intensity transformations to enhance an image of an ancient manuscript using:
# Histogram equalization
# CLAHE
def clahe(im):
    # create a CLAHE object (Arguments are optional).
    clahe = cv2.createCLAHE()#(clipLimit=2.0, tileGridSize=(20,20))
    cl1 = clahe.apply(im)
    return cl1

clached=clahe(image)
cv2.imwrite("sergey-clache.png",clached)

# Gamma correction (experiment with different values of gamma)
def gammaCorrection (im, gamma):

    # b is converted to type float.
    b1 = im.astype(float)
    # Maximum value in b1 is determined.
    b3 = np.max(b1)
    # b1 is normalized
    b2 = b1 / b3
    # gamma-correction exponent is computed.
    b4 = np.log(b2+0.0000001) * gamma
    # gamma-correction is performed.
    c = np.exp(b4) * 255.0
    # c is converted to type int.
    c1 = c.astype(int)
    # Displaying c1
    return c1

gamma=gammaCorrection(image,0.1)
cv2.imwrite("sergey-gamma.png",gamma) #0.1 and we saw the picture in the best way

# Contrast stretching
def contrastStretching(im):
    b = im.max()
    a = im.min()
    print(a, b)
    # Converting im1 to float.
    c = im.astype(float)
    # Contrast stretching transformation.
    im1 = 255.0 * (c - a) / (b - a + 0.0000001)
    return im1

stretched=contrastStretching(image)
cv2.imwrite("sergey-contrast-stretching.jpg",stretched)

#
# Once (according to your judgment) you have the best visual result for each transformation, try to explain the reasons for the major differences between them.
