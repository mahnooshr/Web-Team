from rest_framework.parsers import JSONParser
from rest_framework import permissions, viewsets, status
from rest_framework.response import Response

from django.contrib.auth.models import Group, User
from myapi.models import Item, Category, GiftCard, Order, UserReview
from myapi.serializers import GroupSerializer, UserSerializer, ItemSerializer, CategorySerializer, GiftCardSerializer, UserReviewSerializer, OrderSerializer
from rest_framework.decorators import api_view, APIView

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class CategoryList(APIView):
    """
    List all code categories, or create a new category.
    """
    def get(self, request, format=None):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        # Only allow admins to create categories
        # if not request.user.is_staff:
        #     return Response(status=status.HTTP_403_FORBIDDEN)
        data = JSONParser().parse(request)
        serializer = CategorySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CategoryDetail(APIView):
    """
    Retrieve, update or delete a code category.
    """
    def get_object(self, pk):
        try:
            category = Category.objects.get(pk=pk)
        except Category.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
    def get(self, request, pk, format=None):
        category = self.get_object(pk)
        serializer = CategorySerializer(category)
        return Response(serializer.data)
    
    def put(self, request, pk, format=None):
        category = self.get_object(pk)
        # Only allow admins to update categories
        if not request.user.is_staff:
            return Response(status=status.HTTP_403_FORBIDDEN)
        data = JSONParser().parse(request)
        serializer = CategorySerializer(category, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        category = self.get_object(pk)
        # Only allow admins to delete categories
        if not request.user.is_staff:
            return Response(status=status.HTTP_403_FORBIDDEN)
        category.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ItemList(APIView):
    """
    List all code items, or create a new item.
    """
    def get(self, request, format=None):
        items = Item.objects.all()
        serializer = ItemSerializer(items, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        # Only allow admins to create items
        if not request.user.is_staff:
            return Response(status=status.HTTP_403_FORBIDDEN)
        data = JSONParser().parse(request)
        serializer = ItemSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ItemDetail(APIView):
    """
    Retrieve, update or delete a code item.
    """
    def get_object(self, pk):
        try:
            item = Item.objects.get(pk=pk)
        except Item.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
    def get(self, request, pk, format=None):
        item = self.get_object(pk)
        serializer = ItemSerializer(item)
        return Response(serializer.data)
    
    def put(self, request, pk, format=None):
        item = self.get_object(pk)
        # Only allow admins to update items
        if not request.user.is_staff:
            return Response(status=status.HTTP_403_FORBIDDEN)
        data = JSONParser().parse(request)
        serializer = ItemSerializer(item, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        item = self.get_object(pk)
        # Only allow admins to delete items
        if not request.user.is_staff:
            return Response(status=status.HTTP_403_FORBIDDEN)
        item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class GiftCardList(APIView):
    """
    List all code gift cards, or create a new gift card.
    """
    def get(self, request, format=None):
        gift_cards = GiftCard.objects.all()
        serializer = GiftCardSerializer(gift_cards, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        # Only allow admins to create gift cards
        if not request.user.is_staff:
            return Response(status=status.HTTP_403_FORBIDDEN)
        data = JSONParser().parse(request)
        serializer = GiftCardSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class GiftCardDetail(APIView):
    """
    Retrieve, update or delete a code gift card.
    """
    def get_object(self, pk):
        try:
            gift_card = GiftCard.objects.get(pk=pk)
        except GiftCard.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
    def get(self, request, pk, format=None):
        gift_card = self.get_object(pk)
        serializer = GiftCardSerializer(gift_card)
        return Response(serializer.data)
    
    def put(self, request, pk, format=None):
        gift_card = self.get_object(pk)
        # Only allow admins to update gift cards
        if not request.user.is_staff:
            return Response(status=status.HTTP_403_FORBIDDEN)
        data = JSONParser().parse(request)
        serializer = GiftCardSerializer(gift_card, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        gift_card = self.get_object(pk)
        # Only allow admins to delete gift cards
        if not request.user.is_staff:
            return Response(status=status.HTTP_403_FORBIDDEN)
        gift_card.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class OrderList(APIView):
    """
    List all code orders, or create a new order.
    """
    def get(self, request, format=None):
        orders = Order.objects.all()
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        # Only allow admins to create orders
        if not request.user.is_staff:
            return Response(status=status.HTTP_403_FORBIDDEN)
        data = JSONParser().parse(request)
        serializer = OrderSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class OrderDetail(APIView):
    """
    Retrieve, update or delete a code order.
    """
    def get_object(self, pk):
        try:
            order = Order.objects.get(pk=pk)
        except Order.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
    def get(self, request, pk, format=None):
        order = self.get_object(pk)
        serializer = OrderSerializer(order)
        return Response(serializer.data)
    
    def put(self, request, pk, format=None):
        order = self.get_object(pk)
        # Only allow admins to update orders
        if not request.user.is_staff:
            return Response(status=status.HTTP_403_FORBIDDEN)
        data = JSONParser().parse(request)
        serializer = OrderSerializer(order, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        order = self.get_object(pk)
        # Only allow admins to delete orders
        if not request.user.is_staff:
            return Response(status=status.HTTP_403_FORBIDDEN)
        order.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class UserReviewList(APIView):
    """
    List all code user reviews, or create a new user review.
    """
    def get(self, request, format=None):
        user_reviews = UserReview.objects.all()
        serializer = UserReviewSerializer(user_reviews, many=True)
        return Response(serializer.data)
    
    def post(self, request, format=None):
        # Only allow admins to create user reviews
        if not request.user.is_staff:
            return Response(status=status.HTTP_403_FORBIDDEN)
        data = JSONParser().parse(request)
        serializer = UserReviewSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserReviewDetail(APIView):
    """
    Retrieve, update or delete a code user review.
    """
    def get_object(self, pk):
        try:
            user_review = UserReview.objects.get(pk=pk)
        except UserReview.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
    def get(self, request, pk, format=None):
        user_review = self.get_object(pk)
        serializer = UserReviewSerializer(user_review)
        return Response(serializer.data)
    
    def put(self, request, pk, format=None):
        user_review = self.get_object(pk)
        # Only allow admins to update user reviews
        if not request.user.is_staff:
            return Response(status=status.HTTP_403_FORBIDDEN)
        data = JSONParser().parse(request)
        serializer = UserReviewSerializer(user_review, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk, format=None):
        user_review = self.get_object(pk)
        # Only allow admins to delete user reviews
        if not request.user.is_staff:
            return Response(status=status.HTTP_403_FORBIDDEN)
        user_review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
