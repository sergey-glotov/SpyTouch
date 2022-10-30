import cv2 as cv2
import matplotlib.pyplot as plt



#=============================== TASK 1 ============================
# Read the image 'FamilyTrip.jpg' as a color image
# YOUR CODE HERE
imgcolor=cv2.imread('FamilyTrip.jpg',cv2.IMREAD_COLOR)
if imgcolor is None:
    print("sergey did not load the file")
    exit()

# Print the image width and height.
# YOUR CODE HERE
print(imgcolor.shape)
width,height=imgcolor.shape[0],imgcolor.shape[1]
print(width,height)
# Display the image using matplotlib plt.imshow() and plt.show()
# Don't forget to convert from BGR to RGB before displaying
# YOUR CODE HERE
fixed_img=cv2.cvtColor(imgcolor,cv2.COLOR_BGR2RGB)
#plt.imshow(fixed_img)
#plt.show()
# Save the image under new name
# YOUR CODE HERE
newphoto=cv2.imread('FamilyTrip.jpg',cv2.IMREAD_GRAYSCALE)
cv2.imwrite('familynew.jpg',newphoto)
#=============================== TASK 2 ============================

# Read the image 'FamilyTrip.jpg' as a GRAYSCALE image
# YOUR CODE HERE
grey_photo=cv2.imread('FamilyTrip.jpg',cv2.IMREAD_GRAYSCALE)


# Display the image using matplotlib plt.imshow(img, cmap = 'gray') and plt.show()
# YOUR CODE HERE
plt.imshow(grey_photo,cmap='gray');plt.title('grey photo')
plt.show()


# Save the grayscale image under a name 'FamilyTrip_grayscale.jpg'
# YOUR CODE HERE
cv2.imwrite('greyscale.jpg',grey_photo)

#=============================== TASK 3 ============================
# Read the image 'FamilyTrip.jpg' as a color image
# YOUR CODE HERE


# Resize the image up by a factor of 2.
# YOUR CODE HERE
resized_photo=cv2.resize(imgcolor,(0,0),fx=2,fy=2)
fixed_resizedimage=cv2.cvtColor(resized_photo,cv2.COLOR_BGR2RGB)
plt.imshow(fixed_resizedimage)
plt.show()

# Print the image width and height.
# YOUR CODE HERE
print(resized_photo.shape)
# Display the image using matplotlib plt.imshow() and plt.show()
# Don't forget to convert from BGR to RGB before displaying




# Save the result under a name 'FamilyTrip_resized.jpg'
# YOUR CODE HERE



#=============================== TASK 4 ============================
# Read the image 'FamilyTrip.jpg' as a color image
# YOUR CODE HERE


# Flip the  image horizontally, then flip vertically.
# YOUR CODE HERE
imgh=cv2.flip(imgcolor,0)
imgv=cv2.flip(imgcolor,1)

plt.imshow(imgh);plt.title("horizontal flip")
plt.show()
plt.imshow(imgv);plt.title("vertical flip")
plt.show()
# Display the image using matplotlib plt.imshow() and plt.show()
# Don't forget to convert from BGR to RGB before displaying



