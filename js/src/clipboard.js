��/ * !  
   *   c l i p b o a r d . j s   v 2 . 0 . 4  
   *   h t t p s : / / z e n o r o c h a . g i t h u b . i o / c l i p b o a r d . j s  
   *    
   *   L i c e n s e d   M I T   �   Z e n o   R o c h a  
   * /  
 ( f u n c t i o n   w e b p a c k U n i v e r s a l M o d u l e D e f i n i t i o n ( r o o t ,   f a c t o r y )   {  
 	 i f ( t y p e o f   e x p o r t s   = = =   ' o b j e c t '   & &   t y p e o f   m o d u l e   = = =   ' o b j e c t ' )  
 	 	 m o d u l e . e x p o r t s   =   f a c t o r y ( ) ;  
 	 e l s e   i f ( t y p e o f   d e f i n e   = = =   ' f u n c t i o n '   & &   d e f i n e . a m d )  
 	 	 d e f i n e ( [ ] ,   f a c t o r y ) ;  
 	 e l s e   i f ( t y p e o f   e x p o r t s   = = =   ' o b j e c t ' )  
 	 	 e x p o r t s [ " C l i p b o a r d J S " ]   =   f a c t o r y ( ) ;  
 	 e l s e  
 	 	 r o o t [ " C l i p b o a r d J S " ]   =   f a c t o r y ( ) ;  
 } ) ( t h i s ,   f u n c t i o n ( )   {  
 r e t u r n   / * * * * * * /   ( f u n c t i o n ( m o d u l e s )   {   / /   w e b p a c k B o o t s t r a p  
 / * * * * * * /   	 / /   T h e   m o d u l e   c a c h e  
 / * * * * * * /   	 v a r   i n s t a l l e d M o d u l e s   =   { } ;  
 / * * * * * * /  
 / * * * * * * /   	 / /   T h e   r e q u i r e   f u n c t i o n  
 / * * * * * * /   	 f u n c t i o n   _ _ w e b p a c k _ r e q u i r e _ _ ( m o d u l e I d )   {  
 / * * * * * * /  
 / * * * * * * /   	 	 / /   C h e c k   i f   m o d u l e   i s   i n   c a c h e  
 / * * * * * * /   	 	 i f ( i n s t a l l e d M o d u l e s [ m o d u l e I d ] )   {  
 / * * * * * * /   	 	 	 r e t u r n   i n s t a l l e d M o d u l e s [ m o d u l e I d ] . e x p o r t s ;  
 / * * * * * * /   	 	 }  
 / * * * * * * /   	 	 / /   C r e a t e   a   n e w   m o d u l e   ( a n d   p u t   i t   i n t o   t h e   c a c h e )  
 / * * * * * * /   	 	 v a r   m o d u l e   =   i n s t a l l e d M o d u l e s [ m o d u l e I d ]   =   {  
 / * * * * * * /   	 	 	 i :   m o d u l e I d ,  
 / * * * * * * /   	 	 	 l :   f a l s e ,  
 / * * * * * * /   	 	 	 e x p o r t s :   { }  
 / * * * * * * /   	 	 } ;  
 / * * * * * * /  
 / * * * * * * /   	 	 / /   E x e c u t e   t h e   m o d u l e   f u n c t i o n  
 / * * * * * * /   	 	 m o d u l e s [ m o d u l e I d ] . c a l l ( m o d u l e . e x p o r t s ,   m o d u l e ,   m o d u l e . e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ ) ;  
 / * * * * * * /  
 / * * * * * * /   	 	 / /   F l a g   t h e   m o d u l e   a s   l o a d e d  
 / * * * * * * /   	 	 m o d u l e . l   =   t r u e ;  
 / * * * * * * /  
 / * * * * * * /   	 	 / /   R e t u r n   t h e   e x p o r t s   o f   t h e   m o d u l e  
 / * * * * * * /   	 	 r e t u r n   m o d u l e . e x p o r t s ;  
 / * * * * * * /   	 }  
 / * * * * * * /  
 / * * * * * * /  
 / * * * * * * /   	 / /   e x p o s e   t h e   m o d u l e s   o b j e c t   ( _ _ w e b p a c k _ m o d u l e s _ _ )  
 / * * * * * * /   	 _ _ w e b p a c k _ r e q u i r e _ _ . m   =   m o d u l e s ;  
 / * * * * * * /  
 / * * * * * * /   	 / /   e x p o s e   t h e   m o d u l e   c a c h e  
 / * * * * * * /   	 _ _ w e b p a c k _ r e q u i r e _ _ . c   =   i n s t a l l e d M o d u l e s ;  
 / * * * * * * /  
 / * * * * * * /   	 / /   d e f i n e   g e t t e r   f u n c t i o n   f o r   h a r m o n y   e x p o r t s  
 / * * * * * * /   	 _ _ w e b p a c k _ r e q u i r e _ _ . d   =   f u n c t i o n ( e x p o r t s ,   n a m e ,   g e t t e r )   {  
 / * * * * * * /   	 	 i f ( ! _ _ w e b p a c k _ r e q u i r e _ _ . o ( e x p o r t s ,   n a m e ) )   {  
 / * * * * * * /   	 	 	 O b j e c t . d e f i n e P r o p e r t y ( e x p o r t s ,   n a m e ,   {   e n u m e r a b l e :   t r u e ,   g e t :   g e t t e r   } ) ;  
 / * * * * * * /   	 	 }  
 / * * * * * * /   	 } ;  
 / * * * * * * /  
 / * * * * * * /   	 / /   d e f i n e   _ _ e s M o d u l e   o n   e x p o r t s  
 / * * * * * * /   	 _ _ w e b p a c k _ r e q u i r e _ _ . r   =   f u n c t i o n ( e x p o r t s )   {  
 / * * * * * * /   	 	 i f ( t y p e o f   S y m b o l   ! = =   ' u n d e f i n e d '   & &   S y m b o l . t o S t r i n g T a g )   {  
 / * * * * * * /   	 	 	 O b j e c t . d e f i n e P r o p e r t y ( e x p o r t s ,   S y m b o l . t o S t r i n g T a g ,   {   v a l u e :   ' M o d u l e '   } ) ;  
 / * * * * * * /   	 	 }  
 / * * * * * * /   	 	 O b j e c t . d e f i n e P r o p e r t y ( e x p o r t s ,   ' _ _ e s M o d u l e ' ,   {   v a l u e :   t r u e   } ) ;  
 / * * * * * * /   	 } ;  
 / * * * * * * /  
 / * * * * * * /   	 / /   c r e a t e   a   f a k e   n a m e s p a c e   o b j e c t  
 / * * * * * * /   	 / /   m o d e   &   1 :   v a l u e   i s   a   m o d u l e   i d ,   r e q u i r e   i t  
 / * * * * * * /   	 / /   m o d e   &   2 :   m e r g e   a l l   p r o p e r t i e s   o f   v a l u e   i n t o   t h e   n s  
 / * * * * * * /   	 / /   m o d e   &   4 :   r e t u r n   v a l u e   w h e n   a l r e a d y   n s   o b j e c t  
 / * * * * * * /   	 / /   m o d e   &   8 | 1 :   b e h a v e   l i k e   r e q u i r e  
 / * * * * * * /   	 _ _ w e b p a c k _ r e q u i r e _ _ . t   =   f u n c t i o n ( v a l u e ,   m o d e )   {  
 / * * * * * * /   	 	 i f ( m o d e   &   1 )   v a l u e   =   _ _ w e b p a c k _ r e q u i r e _ _ ( v a l u e ) ;  
 / * * * * * * /   	 	 i f ( m o d e   &   8 )   r e t u r n   v a l u e ;  
 / * * * * * * /   	 	 i f ( ( m o d e   &   4 )   & &   t y p e o f   v a l u e   = = =   ' o b j e c t '   & &   v a l u e   & &   v a l u e . _ _ e s M o d u l e )   r e t u r n   v a l u e ;  
 / * * * * * * /   	 	 v a r   n s   =   O b j e c t . c r e a t e ( n u l l ) ;  
 / * * * * * * /   	 	 _ _ w e b p a c k _ r e q u i r e _ _ . r ( n s ) ;  
 / * * * * * * /   	 	 O b j e c t . d e f i n e P r o p e r t y ( n s ,   ' d e f a u l t ' ,   {   e n u m e r a b l e :   t r u e ,   v a l u e :   v a l u e   } ) ;  
 / * * * * * * /   	 	 i f ( m o d e   &   2   & &   t y p e o f   v a l u e   ! =   ' s t r i n g ' )   f o r ( v a r   k e y   i n   v a l u e )   _ _ w e b p a c k _ r e q u i r e _ _ . d ( n s ,   k e y ,   f u n c t i o n ( k e y )   {   r e t u r n   v a l u e [ k e y ] ;   } . b i n d ( n u l l ,   k e y ) ) ;  
 / * * * * * * /   	 	 r e t u r n   n s ;  
 / * * * * * * /   	 } ;  
 / * * * * * * /  
 / * * * * * * /   	 / /   g e t D e f a u l t E x p o r t   f u n c t i o n   f o r   c o m p a t i b i l i t y   w i t h   n o n - h a r m o n y   m o d u l e s  
 / * * * * * * /   	 _ _ w e b p a c k _ r e q u i r e _ _ . n   =   f u n c t i o n ( m o d u l e )   {  
 / * * * * * * /   	 	 v a r   g e t t e r   =   m o d u l e   & &   m o d u l e . _ _ e s M o d u l e   ?  
 / * * * * * * /   	 	 	 f u n c t i o n   g e t D e f a u l t ( )   {   r e t u r n   m o d u l e [ ' d e f a u l t ' ] ;   }   :  
 / * * * * * * /   	 	 	 f u n c t i o n   g e t M o d u l e E x p o r t s ( )   {   r e t u r n   m o d u l e ;   } ;  
 / * * * * * * /   	 	 _ _ w e b p a c k _ r e q u i r e _ _ . d ( g e t t e r ,   ' a ' ,   g e t t e r ) ;  
 / * * * * * * /   	 	 r e t u r n   g e t t e r ;  
 / * * * * * * /   	 } ;  
 / * * * * * * /  
 / * * * * * * /   	 / /   O b j e c t . p r o t o t y p e . h a s O w n P r o p e r t y . c a l l  
 / * * * * * * /   	 _ _ w e b p a c k _ r e q u i r e _ _ . o   =   f u n c t i o n ( o b j e c t ,   p r o p e r t y )   {   r e t u r n   O b j e c t . p r o t o t y p e . h a s O w n P r o p e r t y . c a l l ( o b j e c t ,   p r o p e r t y ) ;   } ;  
 / * * * * * * /  
 / * * * * * * /   	 / /   _ _ w e b p a c k _ p u b l i c _ p a t h _ _  
 / * * * * * * /   	 _ _ w e b p a c k _ r e q u i r e _ _ . p   =   " " ;  
 / * * * * * * /  
 / * * * * * * /  
 / * * * * * * /   	 / /   L o a d   e n t r y   m o d u l e   a n d   r e t u r n   e x p o r t s  
 / * * * * * * /   	 r e t u r n   _ _ w e b p a c k _ r e q u i r e _ _ ( _ _ w e b p a c k _ r e q u i r e _ _ . s   =   0 ) ;  
 / * * * * * * /   } )  
 / * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * /  
 / * * * * * * /   ( [  
 / *   0   * /  
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ )   {  
  
 " u s e   s t r i c t " ;  
  
  
 v a r   _ t y p e o f   =   t y p e o f   S y m b o l   = = =   " f u n c t i o n "   & &   t y p e o f   S y m b o l . i t e r a t o r   = = =   " s y m b o l "   ?   f u n c t i o n   ( o b j )   {   r e t u r n   t y p e o f   o b j ;   }   :   f u n c t i o n   ( o b j )   {   r e t u r n   o b j   & &   t y p e o f   S y m b o l   = = =   " f u n c t i o n "   & &   o b j . c o n s t r u c t o r   = = =   S y m b o l   & &   o b j   ! = =   S y m b o l . p r o t o t y p e   ?   " s y m b o l "   :   t y p e o f   o b j ;   } ;  
  
 v a r   _ c r e a t e C l a s s   =   f u n c t i o n   ( )   {   f u n c t i o n   d e f i n e P r o p e r t i e s ( t a r g e t ,   p r o p s )   {   f o r   ( v a r   i   =   0 ;   i   <   p r o p s . l e n g t h ;   i + + )   {   v a r   d e s c r i p t o r   =   p r o p s [ i ] ;   d e s c r i p t o r . e n u m e r a b l e   =   d e s c r i p t o r . e n u m e r a b l e   | |   f a l s e ;   d e s c r i p t o r . c o n f i g u r a b l e   =   t r u e ;   i f   ( " v a l u e "   i n   d e s c r i p t o r )   d e s c r i p t o r . w r i t a b l e   =   t r u e ;   O b j e c t . d e f i n e P r o p e r t y ( t a r g e t ,   d e s c r i p t o r . k e y ,   d e s c r i p t o r ) ;   }   }   r e t u r n   f u n c t i o n   ( C o n s t r u c t o r ,   p r o t o P r o p s ,   s t a t i c P r o p s )   {   i f   ( p r o t o P r o p s )   d e f i n e P r o p e r t i e s ( C o n s t r u c t o r . p r o t o t y p e ,   p r o t o P r o p s ) ;   i f   ( s t a t i c P r o p s )   d e f i n e P r o p e r t i e s ( C o n s t r u c t o r ,   s t a t i c P r o p s ) ;   r e t u r n   C o n s t r u c t o r ;   } ;   } ( ) ;  
  
 v a r   _ c l i p b o a r d A c t i o n   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 1 ) ;  
  
 v a r   _ c l i p b o a r d A c t i o n 2   =   _ i n t e r o p R e q u i r e D e f a u l t ( _ c l i p b o a r d A c t i o n ) ;  
  
 v a r   _ t i n y E m i t t e r   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 3 ) ;  
  
 v a r   _ t i n y E m i t t e r 2   =   _ i n t e r o p R e q u i r e D e f a u l t ( _ t i n y E m i t t e r ) ;  
  
 v a r   _ g o o d L i s t e n e r   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 4 ) ;  
  
 v a r   _ g o o d L i s t e n e r 2   =   _ i n t e r o p R e q u i r e D e f a u l t ( _ g o o d L i s t e n e r ) ;  
  
 f u n c t i o n   _ i n t e r o p R e q u i r e D e f a u l t ( o b j )   {   r e t u r n   o b j   & &   o b j . _ _ e s M o d u l e   ?   o b j   :   {   d e f a u l t :   o b j   } ;   }  
  
 f u n c t i o n   _ c l a s s C a l l C h e c k ( i n s t a n c e ,   C o n s t r u c t o r )   {   i f   ( ! ( i n s t a n c e   i n s t a n c e o f   C o n s t r u c t o r ) )   {   t h r o w   n e w   T y p e E r r o r ( " C a n n o t   c a l l   a   c l a s s   a s   a   f u n c t i o n " ) ;   }   }  
  
 f u n c t i o n   _ p o s s i b l e C o n s t r u c t o r R e t u r n ( s e l f ,   c a l l )   {   i f   ( ! s e l f )   {   t h r o w   n e w   R e f e r e n c e E r r o r ( " t h i s   h a s n ' t   b e e n   i n i t i a l i s e d   -   s u p e r ( )   h a s n ' t   b e e n   c a l l e d " ) ;   }   r e t u r n   c a l l   & &   ( t y p e o f   c a l l   = = =   " o b j e c t "   | |   t y p e o f   c a l l   = = =   " f u n c t i o n " )   ?   c a l l   :   s e l f ;   }  
  
 f u n c t i o n   _ i n h e r i t s ( s u b C l a s s ,   s u p e r C l a s s )   {   i f   ( t y p e o f   s u p e r C l a s s   ! = =   " f u n c t i o n "   & &   s u p e r C l a s s   ! = =   n u l l )   {   t h r o w   n e w   T y p e E r r o r ( " S u p e r   e x p r e s s i o n   m u s t   e i t h e r   b e   n u l l   o r   a   f u n c t i o n ,   n o t   "   +   t y p e o f   s u p e r C l a s s ) ;   }   s u b C l a s s . p r o t o t y p e   =   O b j e c t . c r e a t e ( s u p e r C l a s s   & &   s u p e r C l a s s . p r o t o t y p e ,   {   c o n s t r u c t o r :   {   v a l u e :   s u b C l a s s ,   e n u m e r a b l e :   f a l s e ,   w r i t a b l e :   t r u e ,   c o n f i g u r a b l e :   t r u e   }   } ) ;   i f   ( s u p e r C l a s s )   O b j e c t . s e t P r o t o t y p e O f   ?   O b j e c t . s e t P r o t o t y p e O f ( s u b C l a s s ,   s u p e r C l a s s )   :   s u b C l a s s . _ _ p r o t o _ _   =   s u p e r C l a s s ;   }  
  
 / * *  
   *   B a s e   c l a s s   w h i c h   t a k e s   o n e   o r   m o r e   e l e m e n t s ,   a d d s   e v e n t   l i s t e n e r s   t o   t h e m ,  
   *   a n d   i n s t a n t i a t e s   a   n e w   ` C l i p b o a r d A c t i o n `   o n   e a c h   c l i c k .  
   * /  
 v a r   C l i p b o a r d   =   f u n c t i o n   ( _ E m i t t e r )   {  
         _ i n h e r i t s ( C l i p b o a r d ,   _ E m i t t e r ) ;  
  
         / * *  
           *   @ p a r a m   { S t r i n g | H T M L E l e m e n t | H T M L C o l l e c t i o n | N o d e L i s t }   t r i g g e r  
           *   @ p a r a m   { O b j e c t }   o p t i o n s  
           * /  
         f u n c t i o n   C l i p b o a r d ( t r i g g e r ,   o p t i o n s )   {  
                 _ c l a s s C a l l C h e c k ( t h i s ,   C l i p b o a r d ) ;  
  
                 v a r   _ t h i s   =   _ p o s s i b l e C o n s t r u c t o r R e t u r n ( t h i s ,   ( C l i p b o a r d . _ _ p r o t o _ _   | |   O b j e c t . g e t P r o t o t y p e O f ( C l i p b o a r d ) ) . c a l l ( t h i s ) ) ;  
  
                 _ t h i s . r e s o l v e O p t i o n s ( o p t i o n s ) ;  
                 _ t h i s . l i s t e n C l i c k ( t r i g g e r ) ;  
                 r e t u r n   _ t h i s ;  
         }  
  
         / * *  
           *   D e f i n e s   i f   a t t r i b u t e s   w o u l d   b e   r e s o l v e d   u s i n g   i n t e r n a l   s e t t e r   f u n c t i o n s  
           *   o r   c u s t o m   f u n c t i o n s   t h a t   w e r e   p a s s e d   i n   t h e   c o n s t r u c t o r .  
           *   @ p a r a m   { O b j e c t }   o p t i o n s  
           * /  
  
  
         _ c r e a t e C l a s s ( C l i p b o a r d ,   [ {  
                 k e y :   ' r e s o l v e O p t i o n s ' ,  
                 v a l u e :   f u n c t i o n   r e s o l v e O p t i o n s ( )   {  
                         v a r   o p t i o n s   =   a r g u m e n t s . l e n g t h   >   0   & &   a r g u m e n t s [ 0 ]   ! = =   u n d e f i n e d   ?   a r g u m e n t s [ 0 ]   :   { } ;  
  
                         t h i s . a c t i o n   =   t y p e o f   o p t i o n s . a c t i o n   = = =   ' f u n c t i o n '   ?   o p t i o n s . a c t i o n   :   t h i s . d e f a u l t A c t i o n ;  
                         t h i s . t a r g e t   =   t y p e o f   o p t i o n s . t a r g e t   = = =   ' f u n c t i o n '   ?   o p t i o n s . t a r g e t   :   t h i s . d e f a u l t T a r g e t ;  
                         t h i s . t e x t   =   t y p e o f   o p t i o n s . t e x t   = = =   ' f u n c t i o n '   ?   o p t i o n s . t e x t   :   t h i s . d e f a u l t T e x t ;  
                         t h i s . c o n t a i n e r   =   _ t y p e o f ( o p t i o n s . c o n t a i n e r )   = = =   ' o b j e c t '   ?   o p t i o n s . c o n t a i n e r   :   d o c u m e n t . b o d y ;  
                 }  
  
                 / * *  
                   *   A d d s   a   c l i c k   e v e n t   l i s t e n e r   t o   t h e   p a s s e d   t r i g g e r .  
                   *   @ p a r a m   { S t r i n g | H T M L E l e m e n t | H T M L C o l l e c t i o n | N o d e L i s t }   t r i g g e r  
                   * /  
  
         } ,   {  
                 k e y :   ' l i s t e n C l i c k ' ,  
                 v a l u e :   f u n c t i o n   l i s t e n C l i c k ( t r i g g e r )   {  
                         v a r   _ t h i s 2   =   t h i s ;  
  
                         t h i s . l i s t e n e r   =   ( 0 ,   _ g o o d L i s t e n e r 2 . d e f a u l t ) ( t r i g g e r ,   ' c l i c k ' ,   f u n c t i o n   ( e )   {  
                                 r e t u r n   _ t h i s 2 . o n C l i c k ( e ) ;  
                         } ) ;  
                 }  
  
                 / * *  
                   *   D e f i n e s   a   n e w   ` C l i p b o a r d A c t i o n `   o n   e a c h   c l i c k   e v e n t .  
                   *   @ p a r a m   { E v e n t }   e  
                   * /  
  
         } ,   {  
                 k e y :   ' o n C l i c k ' ,  
                 v a l u e :   f u n c t i o n   o n C l i c k ( e )   {  
                         v a r   t r i g g e r   =   e . d e l e g a t e T a r g e t   | |   e . c u r r e n t T a r g e t ;  
  
                         i f   ( t h i s . c l i p b o a r d A c t i o n )   {  
                                 t h i s . c l i p b o a r d A c t i o n   =   n u l l ;  
                         }  
  
                         t h i s . c l i p b o a r d A c t i o n   =   n e w   _ c l i p b o a r d A c t i o n 2 . d e f a u l t ( {  
                                 a c t i o n :   t h i s . a c t i o n ( t r i g g e r ) ,  
                                 t a r g e t :   t h i s . t a r g e t ( t r i g g e r ) ,  
                                 t e x t :   t h i s . t e x t ( t r i g g e r ) ,  
                                 c o n t a i n e r :   t h i s . c o n t a i n e r ,  
                                 t r i g g e r :   t r i g g e r ,  
                                 e m i t t e r :   t h i s  
                         } ) ;  
                 }  
  
                 / * *  
                   *   D e f a u l t   ` a c t i o n `   l o o k u p   f u n c t i o n .  
                   *   @ p a r a m   { E l e m e n t }   t r i g g e r  
                   * /  
  
         } ,   {  
                 k e y :   ' d e f a u l t A c t i o n ' ,  
                 v a l u e :   f u n c t i o n   d e f a u l t A c t i o n ( t r i g g e r )   {  
                         r e t u r n   g e t A t t r i b u t e V a l u e ( ' a c t i o n ' ,   t r i g g e r ) ;  
                 }  
  
                 / * *  
                   *   D e f a u l t   ` t a r g e t `   l o o k u p   f u n c t i o n .  
                   *   @ p a r a m   { E l e m e n t }   t r i g g e r  
                   * /  
  
         } ,   {  
                 k e y :   ' d e f a u l t T a r g e t ' ,  
                 v a l u e :   f u n c t i o n   d e f a u l t T a r g e t ( t r i g g e r )   {  
                         v a r   s e l e c t o r   =   g e t A t t r i b u t e V a l u e ( ' t a r g e t ' ,   t r i g g e r ) ;  
  
                         i f   ( s e l e c t o r )   {  
                                 r e t u r n   d o c u m e n t . q u e r y S e l e c t o r ( s e l e c t o r ) ;  
                         }  
                 }  
  
                 / * *  
                   *   R e t u r n s   t h e   s u p p o r t   o f   t h e   g i v e n   a c t i o n ,   o r   a l l   a c t i o n s   i f   n o   a c t i o n   i s  
                   *   g i v e n .  
                   *   @ p a r a m   { S t r i n g }   [ a c t i o n ]  
                   * /  
  
         } ,   {  
                 k e y :   ' d e f a u l t T e x t ' ,  
  
  
                 / * *  
                   *   D e f a u l t   ` t e x t `   l o o k u p   f u n c t i o n .  
                   *   @ p a r a m   { E l e m e n t }   t r i g g e r  
                   * /  
                 v a l u e :   f u n c t i o n   d e f a u l t T e x t ( t r i g g e r )   {  
                         r e t u r n   g e t A t t r i b u t e V a l u e ( ' t e x t ' ,   t r i g g e r ) ;  
                 }  
  
                 / * *  
                   *   D e s t r o y   l i f e c y c l e .  
                   * /  
  
         } ,   {  
                 k e y :   ' d e s t r o y ' ,  
                 v a l u e :   f u n c t i o n   d e s t r o y ( )   {  
                         t h i s . l i s t e n e r . d e s t r o y ( ) ;  
  
                         i f   ( t h i s . c l i p b o a r d A c t i o n )   {  
                                 t h i s . c l i p b o a r d A c t i o n . d e s t r o y ( ) ;  
                                 t h i s . c l i p b o a r d A c t i o n   =   n u l l ;  
                         }  
                 }  
         } ] ,   [ {  
                 k e y :   ' i s S u p p o r t e d ' ,  
                 v a l u e :   f u n c t i o n   i s S u p p o r t e d ( )   {  
                         v a r   a c t i o n   =   a r g u m e n t s . l e n g t h   >   0   & &   a r g u m e n t s [ 0 ]   ! = =   u n d e f i n e d   ?   a r g u m e n t s [ 0 ]   :   [ ' c o p y ' ,   ' c u t ' ] ;  
  
                         v a r   a c t i o n s   =   t y p e o f   a c t i o n   = = =   ' s t r i n g '   ?   [ a c t i o n ]   :   a c t i o n ;  
                         v a r   s u p p o r t   =   ! ! d o c u m e n t . q u e r y C o m m a n d S u p p o r t e d ;  
  
                         a c t i o n s . f o r E a c h ( f u n c t i o n   ( a c t i o n )   {  
                                 s u p p o r t   =   s u p p o r t   & &   ! ! d o c u m e n t . q u e r y C o m m a n d S u p p o r t e d ( a c t i o n ) ;  
                         } ) ;  
  
                         r e t u r n   s u p p o r t ;  
                 }  
         } ] ) ;  
  
         r e t u r n   C l i p b o a r d ;  
 } ( _ t i n y E m i t t e r 2 . d e f a u l t ) ;  
  
 / * *  
   *   H e l p e r   f u n c t i o n   t o   r e t r i e v e   a t t r i b u t e   v a l u e .  
   *   @ p a r a m   { S t r i n g }   s u f f i x  
   *   @ p a r a m   { E l e m e n t }   e l e m e n t  
   * /  
  
  
 f u n c t i o n   g e t A t t r i b u t e V a l u e ( s u f f i x ,   e l e m e n t )   {  
         v a r   a t t r i b u t e   =   ' d a t a - c l i p b o a r d - '   +   s u f f i x ;  
  
         i f   ( ! e l e m e n t . h a s A t t r i b u t e ( a t t r i b u t e ) )   {  
                 r e t u r n ;  
         }  
  
         r e t u r n   e l e m e n t . g e t A t t r i b u t e ( a t t r i b u t e ) ;  
 }  
  
 m o d u l e . e x p o r t s   =   C l i p b o a r d ;  
  
 / * * * /   } ) ,  
 / *   1   * /  
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ )   {  
  
 " u s e   s t r i c t " ;  
  
  
 v a r   _ t y p e o f   =   t y p e o f   S y m b o l   = = =   " f u n c t i o n "   & &   t y p e o f   S y m b o l . i t e r a t o r   = = =   " s y m b o l "   ?   f u n c t i o n   ( o b j )   {   r e t u r n   t y p e o f   o b j ;   }   :   f u n c t i o n   ( o b j )   {   r e t u r n   o b j   & &   t y p e o f   S y m b o l   = = =   " f u n c t i o n "   & &   o b j . c o n s t r u c t o r   = = =   S y m b o l   & &   o b j   ! = =   S y m b o l . p r o t o t y p e   ?   " s y m b o l "   :   t y p e o f   o b j ;   } ;  
  
 v a r   _ c r e a t e C l a s s   =   f u n c t i o n   ( )   {   f u n c t i o n   d e f i n e P r o p e r t i e s ( t a r g e t ,   p r o p s )   {   f o r   ( v a r   i   =   0 ;   i   <   p r o p s . l e n g t h ;   i + + )   {   v a r   d e s c r i p t o r   =   p r o p s [ i ] ;   d e s c r i p t o r . e n u m e r a b l e   =   d e s c r i p t o r . e n u m e r a b l e   | |   f a l s e ;   d e s c r i p t o r . c o n f i g u r a b l e   =   t r u e ;   i f   ( " v a l u e "   i n   d e s c r i p t o r )   d e s c r i p t o r . w r i t a b l e   =   t r u e ;   O b j e c t . d e f i n e P r o p e r t y ( t a r g e t ,   d e s c r i p t o r . k e y ,   d e s c r i p t o r ) ;   }   }   r e t u r n   f u n c t i o n   ( C o n s t r u c t o r ,   p r o t o P r o p s ,   s t a t i c P r o p s )   {   i f   ( p r o t o P r o p s )   d e f i n e P r o p e r t i e s ( C o n s t r u c t o r . p r o t o t y p e ,   p r o t o P r o p s ) ;   i f   ( s t a t i c P r o p s )   d e f i n e P r o p e r t i e s ( C o n s t r u c t o r ,   s t a t i c P r o p s ) ;   r e t u r n   C o n s t r u c t o r ;   } ;   } ( ) ;  
  
 v a r   _ s e l e c t   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 2 ) ;  
  
 v a r   _ s e l e c t 2   =   _ i n t e r o p R e q u i r e D e f a u l t ( _ s e l e c t ) ;  
  
 f u n c t i o n   _ i n t e r o p R e q u i r e D e f a u l t ( o b j )   {   r e t u r n   o b j   & &   o b j . _ _ e s M o d u l e   ?   o b j   :   {   d e f a u l t :   o b j   } ;   }  
  
 f u n c t i o n   _ c l a s s C a l l C h e c k ( i n s t a n c e ,   C o n s t r u c t o r )   {   i f   ( ! ( i n s t a n c e   i n s t a n c e o f   C o n s t r u c t o r ) )   {   t h r o w   n e w   T y p e E r r o r ( " C a n n o t   c a l l   a   c l a s s   a s   a   f u n c t i o n " ) ;   }   }  
  
 / * *  
   *   I n n e r   c l a s s   w h i c h   p e r f o r m s   s e l e c t i o n   f r o m   e i t h e r   ` t e x t `   o r   ` t a r g e t `  
   *   p r o p e r t i e s   a n d   t h e n   e x e c u t e s   c o p y   o r   c u t   o p e r a t i o n s .  
   * /  
 v a r   C l i p b o a r d A c t i o n   =   f u n c t i o n   ( )   {  
         / * *  
           *   @ p a r a m   { O b j e c t }   o p t i o n s  
           * /  
         f u n c t i o n   C l i p b o a r d A c t i o n ( o p t i o n s )   {  
                 _ c l a s s C a l l C h e c k ( t h i s ,   C l i p b o a r d A c t i o n ) ;  
  
                 t h i s . r e s o l v e O p t i o n s ( o p t i o n s ) ;  
                 t h i s . i n i t S e l e c t i o n ( ) ;  
         }  
  
         / * *  
           *   D e f i n e s   b a s e   p r o p e r t i e s   p a s s e d   f r o m   c o n s t r u c t o r .  
           *   @ p a r a m   { O b j e c t }   o p t i o n s  
           * /  
  
  
         _ c r e a t e C l a s s ( C l i p b o a r d A c t i o n ,   [ {  
                 k e y :   ' r e s o l v e O p t i o n s ' ,  
                 v a l u e :   f u n c t i o n   r e s o l v e O p t i o n s ( )   {  
                         v a r   o p t i o n s   =   a r g u m e n t s . l e n g t h   >   0   & &   a r g u m e n t s [ 0 ]   ! = =   u n d e f i n e d   ?   a r g u m e n t s [ 0 ]   :   { } ;  
  
                         t h i s . a c t i o n   =   o p t i o n s . a c t i o n ;  
                         t h i s . c o n t a i n e r   =   o p t i o n s . c o n t a i n e r ;  
                         t h i s . e m i t t e r   =   o p t i o n s . e m i t t e r ;  
                         t h i s . t a r g e t   =   o p t i o n s . t a r g e t ;  
                         t h i s . t e x t   =   o p t i o n s . t e x t ;  
                         t h i s . t r i g g e r   =   o p t i o n s . t r i g g e r ;  
  
                         t h i s . s e l e c t e d T e x t   =   ' ' ;  
                 }  
  
                 / * *  
                   *   D e c i d e s   w h i c h   s e l e c t i o n   s t r a t e g y   i s   g o i n g   t o   b e   a p p l i e d   b a s e d  
                   *   o n   t h e   e x i s t e n c e   o f   ` t e x t `   a n d   ` t a r g e t `   p r o p e r t i e s .  
                   * /  
  
         } ,   {  
                 k e y :   ' i n i t S e l e c t i o n ' ,  
                 v a l u e :   f u n c t i o n   i n i t S e l e c t i o n ( )   {  
                         i f   ( t h i s . t e x t )   {  
                                 t h i s . s e l e c t F a k e ( ) ;  
                         }   e l s e   i f   ( t h i s . t a r g e t )   {  
                                 t h i s . s e l e c t T a r g e t ( ) ;  
                         }  
                 }  
  
                 / * *  
                   *   C r e a t e s   a   f a k e   t e x t a r e a   e l e m e n t ,   s e t s   i t s   v a l u e   f r o m   ` t e x t `   p r o p e r t y ,  
                   *   a n d   m a k e s   a   s e l e c t i o n   o n   i t .  
                   * /  
  
         } ,   {  
                 k e y :   ' s e l e c t F a k e ' ,  
                 v a l u e :   f u n c t i o n   s e l e c t F a k e ( )   {  
                         v a r   _ t h i s   =   t h i s ;  
  
                         v a r   i s R T L   =   d o c u m e n t . d o c u m e n t E l e m e n t . g e t A t t r i b u t e ( ' d i r ' )   = =   ' r t l ' ;  
  
                         t h i s . r e m o v e F a k e ( ) ;  
  
                         t h i s . f a k e H a n d l e r C a l l b a c k   =   f u n c t i o n   ( )   {  
                                 r e t u r n   _ t h i s . r e m o v e F a k e ( ) ;  
                         } ;  
                         t h i s . f a k e H a n d l e r   =   t h i s . c o n t a i n e r . a d d E v e n t L i s t e n e r ( ' c l i c k ' ,   t h i s . f a k e H a n d l e r C a l l b a c k )   | |   t r u e ;  
  
                         t h i s . f a k e E l e m   =   d o c u m e n t . c r e a t e E l e m e n t ( ' t e x t a r e a ' ) ;  
                         / /   P r e v e n t   z o o m i n g   o n   i O S  
                         t h i s . f a k e E l e m . s t y l e . f o n t S i z e   =   ' 1 2 p t ' ;  
                         / /   R e s e t   b o x   m o d e l  
                         t h i s . f a k e E l e m . s t y l e . b o r d e r   =   ' 0 ' ;  
                         t h i s . f a k e E l e m . s t y l e . p a d d i n g   =   ' 0 ' ;  
                         t h i s . f a k e E l e m . s t y l e . m a r g i n   =   ' 0 ' ;  
                         / /   M o v e   e l e m e n t   o u t   o f   s c r e e n   h o r i z o n t a l l y  
                         t h i s . f a k e E l e m . s t y l e . p o s i t i o n   =   ' a b s o l u t e ' ;  
                         t h i s . f a k e E l e m . s t y l e [ i s R T L   ?   ' r i g h t '   :   ' l e f t ' ]   =   ' - 9 9 9 9 p x ' ;  
                         / /   M o v e   e l e m e n t   t o   t h e   s a m e   p o s i t i o n   v e r t i c a l l y  
                         v a r   y P o s i t i o n   =   w i n d o w . p a g e Y O f f s e t   | |   d o c u m e n t . d o c u m e n t E l e m e n t . s c r o l l T o p ;  
                         t h i s . f a k e E l e m . s t y l e . t o p   =   y P o s i t i o n   +   ' p x ' ;  
  
                         t h i s . f a k e E l e m . s e t A t t r i b u t e ( ' r e a d o n l y ' ,   ' ' ) ;  
                         t h i s . f a k e E l e m . v a l u e   =   t h i s . t e x t ;  
  
                         t h i s . c o n t a i n e r . a p p e n d C h i l d ( t h i s . f a k e E l e m ) ;  
  
                         t h i s . s e l e c t e d T e x t   =   ( 0 ,   _ s e l e c t 2 . d e f a u l t ) ( t h i s . f a k e E l e m ) ;  
                         t h i s . c o p y T e x t ( ) ;  
                 }  
  
                 / * *  
                   *   O n l y   r e m o v e s   t h e   f a k e   e l e m e n t   a f t e r   a n o t h e r   c l i c k   e v e n t ,   t h a t   w a y  
                   *   a   u s e r   c a n   h i t   ` C t r l + C `   t o   c o p y   b e c a u s e   s e l e c t i o n   s t i l l   e x i s t s .  
                   * /  
  
         } ,   {  
                 k e y :   ' r e m o v e F a k e ' ,  
                 v a l u e :   f u n c t i o n   r e m o v e F a k e ( )   {  
                         i f   ( t h i s . f a k e H a n d l e r )   {  
                                 t h i s . c o n t a i n e r . r e m o v e E v e n t L i s t e n e r ( ' c l i c k ' ,   t h i s . f a k e H a n d l e r C a l l b a c k ) ;  
                                 t h i s . f a k e H a n d l e r   =   n u l l ;  
                                 t h i s . f a k e H a n d l e r C a l l b a c k   =   n u l l ;  
                         }  
  
                         i f   ( t h i s . f a k e E l e m )   {  
                                 t h i s . c o n t a i n e r . r e m o v e C h i l d ( t h i s . f a k e E l e m ) ;  
                                 t h i s . f a k e E l e m   =   n u l l ;  
                         }  
                 }  
  
                 / * *  
                   *   S e l e c t s   t h e   c o n t e n t   f r o m   e l e m e n t   p a s s e d   o n   ` t a r g e t `   p r o p e r t y .  
                   * /  
  
         } ,   {  
                 k e y :   ' s e l e c t T a r g e t ' ,  
                 v a l u e :   f u n c t i o n   s e l e c t T a r g e t ( )   {  
                         t h i s . s e l e c t e d T e x t   =   ( 0 ,   _ s e l e c t 2 . d e f a u l t ) ( t h i s . t a r g e t ) ;  
                         t h i s . c o p y T e x t ( ) ;  
                 }  
  
                 / * *  
                   *   E x e c u t e s   t h e   c o p y   o p e r a t i o n   b a s e d   o n   t h e   c u r r e n t   s e l e c t i o n .  
                   * /  
  
         } ,   {  
                 k e y :   ' c o p y T e x t ' ,  
                 v a l u e :   f u n c t i o n   c o p y T e x t ( )   {  
                         v a r   s u c c e e d e d   =   v o i d   0 ;  
  
                         t r y   {  
                                 s u c c e e d e d   =   d o c u m e n t . e x e c C o m m a n d ( t h i s . a c t i o n ) ;  
                         }   c a t c h   ( e r r )   {  
                                 s u c c e e d e d   =   f a l s e ;  
                         }  
  
                         t h i s . h a n d l e R e s u l t ( s u c c e e d e d ) ;  
                 }  
  
                 / * *  
                   *   F i r e s   a n   e v e n t   b a s e d   o n   t h e   c o p y   o p e r a t i o n   r e s u l t .  
                   *   @ p a r a m   { B o o l e a n }   s u c c e e d e d  
                   * /  
  
         } ,   {  
                 k e y :   ' h a n d l e R e s u l t ' ,  
                 v a l u e :   f u n c t i o n   h a n d l e R e s u l t ( s u c c e e d e d )   {  
                         t h i s . e m i t t e r . e m i t ( s u c c e e d e d   ?   ' s u c c e s s '   :   ' e r r o r ' ,   {  
                                 a c t i o n :   t h i s . a c t i o n ,  
                                 t e x t :   t h i s . s e l e c t e d T e x t ,  
                                 t r i g g e r :   t h i s . t r i g g e r ,  
                                 c l e a r S e l e c t i o n :   t h i s . c l e a r S e l e c t i o n . b i n d ( t h i s )  
                         } ) ;  
                 }  
  
                 / * *  
                   *   M o v e s   f o c u s   a w a y   f r o m   ` t a r g e t `   a n d   b a c k   t o   t h e   t r i g g e r ,   r e m o v e s   c u r r e n t   s e l e c t i o n .  
                   * /  
  
         } ,   {  
                 k e y :   ' c l e a r S e l e c t i o n ' ,  
                 v a l u e :   f u n c t i o n   c l e a r S e l e c t i o n ( )   {  
                         i f   ( t h i s . t r i g g e r )   {  
                                 t h i s . t r i g g e r . f o c u s ( ) ;  
                         }  
  
                         w i n d o w . g e t S e l e c t i o n ( ) . r e m o v e A l l R a n g e s ( ) ;  
                 }  
  
                 / * *  
                   *   S e t s   t h e   ` a c t i o n `   t o   b e   p e r f o r m e d   w h i c h   c a n   b e   e i t h e r   ' c o p y '   o r   ' c u t ' .  
                   *   @ p a r a m   { S t r i n g }   a c t i o n  
                   * /  
  
         } ,   {  
                 k e y :   ' d e s t r o y ' ,  
  
  
                 / * *  
                   *   D e s t r o y   l i f e c y c l e .  
                   * /  
                 v a l u e :   f u n c t i o n   d e s t r o y ( )   {  
                         t h i s . r e m o v e F a k e ( ) ;  
                 }  
         } ,   {  
                 k e y :   ' a c t i o n ' ,  
                 s e t :   f u n c t i o n   s e t ( )   {  
                         v a r   a c t i o n   =   a r g u m e n t s . l e n g t h   >   0   & &   a r g u m e n t s [ 0 ]   ! = =   u n d e f i n e d   ?   a r g u m e n t s [ 0 ]   :   ' c o p y ' ;  
  
                         t h i s . _ a c t i o n   =   a c t i o n ;  
  
                         i f   ( t h i s . _ a c t i o n   ! = =   ' c o p y '   & &   t h i s . _ a c t i o n   ! = =   ' c u t ' )   {  
                                 t h r o w   n e w   E r r o r ( ' I n v a l i d   " a c t i o n "   v a l u e ,   u s e   e i t h e r   " c o p y "   o r   " c u t " ' ) ;  
                         }  
                 }  
  
                 / * *  
                   *   G e t s   t h e   ` a c t i o n `   p r o p e r t y .  
                   *   @ r e t u r n   { S t r i n g }  
                   * /  
                 ,  
                 g e t :   f u n c t i o n   g e t ( )   {  
                         r e t u r n   t h i s . _ a c t i o n ;  
                 }  
  
                 / * *  
                   *   S e t s   t h e   ` t a r g e t `   p r o p e r t y   u s i n g   a n   e l e m e n t  
                   *   t h a t   w i l l   b e   h a v e   i t s   c o n t e n t   c o p i e d .  
                   *   @ p a r a m   { E l e m e n t }   t a r g e t  
                   * /  
  
         } ,   {  
                 k e y :   ' t a r g e t ' ,  
                 s e t :   f u n c t i o n   s e t ( t a r g e t )   {  
                         i f   ( t a r g e t   ! = =   u n d e f i n e d )   {  
                                 i f   ( t a r g e t   & &   ( t y p e o f   t a r g e t   = = =   ' u n d e f i n e d '   ?   ' u n d e f i n e d '   :   _ t y p e o f ( t a r g e t ) )   = = =   ' o b j e c t '   & &   t a r g e t . n o d e T y p e   = = =   1 )   {  
                                         i f   ( t h i s . a c t i o n   = = =   ' c o p y '   & &   t a r g e t . h a s A t t r i b u t e ( ' d i s a b l e d ' ) )   {  
                                                 t h r o w   n e w   E r r o r ( ' I n v a l i d   " t a r g e t "   a t t r i b u t e .   P l e a s e   u s e   " r e a d o n l y "   i n s t e a d   o f   " d i s a b l e d "   a t t r i b u t e ' ) ;  
                                         }  
  
                                         i f   ( t h i s . a c t i o n   = = =   ' c u t '   & &   ( t a r g e t . h a s A t t r i b u t e ( ' r e a d o n l y ' )   | |   t a r g e t . h a s A t t r i b u t e ( ' d i s a b l e d ' ) ) )   {  
                                                 t h r o w   n e w   E r r o r ( ' I n v a l i d   " t a r g e t "   a t t r i b u t e .   Y o u   c a n \ ' t   c u t   t e x t   f r o m   e l e m e n t s   w i t h   " r e a d o n l y "   o r   " d i s a b l e d "   a t t r i b u t e s ' ) ;  
                                         }  
  
                                         t h i s . _ t a r g e t   =   t a r g e t ;  
                                 }   e l s e   {  
                                         t h r o w   n e w   E r r o r ( ' I n v a l i d   " t a r g e t "   v a l u e ,   u s e   a   v a l i d   E l e m e n t ' ) ;  
                                 }  
                         }  
                 }  
  
                 / * *  
                   *   G e t s   t h e   ` t a r g e t `   p r o p e r t y .  
                   *   @ r e t u r n   { S t r i n g | H T M L E l e m e n t }  
                   * /  
                 ,  
                 g e t :   f u n c t i o n   g e t ( )   {  
                         r e t u r n   t h i s . _ t a r g e t ;  
                 }  
         } ] ) ;  
  
         r e t u r n   C l i p b o a r d A c t i o n ;  
 } ( ) ;  
  
 m o d u l e . e x p o r t s   =   C l i p b o a r d A c t i o n ;  
  
 / * * * /   } ) ,  
 / *   2   * /  
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s )   {  
  
 f u n c t i o n   s e l e c t ( e l e m e n t )   {  
         v a r   s e l e c t e d T e x t ;  
  
         i f   ( e l e m e n t . n o d e N a m e   = = =   ' S E L E C T ' )   {  
                 e l e m e n t . f o c u s ( ) ;  
  
                 s e l e c t e d T e x t   =   e l e m e n t . v a l u e ;  
         }  
         e l s e   i f   ( e l e m e n t . n o d e N a m e   = = =   ' I N P U T '   | |   e l e m e n t . n o d e N a m e   = = =   ' T E X T A R E A ' )   {  
                 v a r   i s R e a d O n l y   =   e l e m e n t . h a s A t t r i b u t e ( ' r e a d o n l y ' ) ;  
  
                 i f   ( ! i s R e a d O n l y )   {  
                         e l e m e n t . s e t A t t r i b u t e ( ' r e a d o n l y ' ,   ' ' ) ;  
                 }  
  
                 e l e m e n t . s e l e c t ( ) ;  
                 e l e m e n t . s e t S e l e c t i o n R a n g e ( 0 ,   e l e m e n t . v a l u e . l e n g t h ) ;  
  
                 i f   ( ! i s R e a d O n l y )   {  
                         e l e m e n t . r e m o v e A t t r i b u t e ( ' r e a d o n l y ' ) ;  
                 }  
  
                 s e l e c t e d T e x t   =   e l e m e n t . v a l u e ;  
         }  
         e l s e   {  
                 i f   ( e l e m e n t . h a s A t t r i b u t e ( ' c o n t e n t e d i t a b l e ' ) )   {  
                         e l e m e n t . f o c u s ( ) ;  
                 }  
  
                 v a r   s e l e c t i o n   =   w i n d o w . g e t S e l e c t i o n ( ) ;  
                 v a r   r a n g e   =   d o c u m e n t . c r e a t e R a n g e ( ) ;  
  
                 r a n g e . s e l e c t N o d e C o n t e n t s ( e l e m e n t ) ;  
                 s e l e c t i o n . r e m o v e A l l R a n g e s ( ) ;  
                 s e l e c t i o n . a d d R a n g e ( r a n g e ) ;  
  
                 s e l e c t e d T e x t   =   s e l e c t i o n . t o S t r i n g ( ) ;  
         }  
  
         r e t u r n   s e l e c t e d T e x t ;  
 }  
  
 m o d u l e . e x p o r t s   =   s e l e c t ;  
  
  
 / * * * /   } ) ,  
 / *   3   * /  
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s )   {  
  
 f u n c t i o n   E   ( )   {  
     / /   K e e p   t h i s   e m p t y   s o   i t ' s   e a s i e r   t o   i n h e r i t   f r o m  
     / /   ( v i a   h t t p s : / / g i t h u b . c o m / l i p s m a c k   f r o m   h t t p s : / / g i t h u b . c o m / s c o t t c o r g a n / t i n y - e m i t t e r / i s s u e s / 3 )  
 }  
  
 E . p r o t o t y p e   =   {  
     o n :   f u n c t i o n   ( n a m e ,   c a l l b a c k ,   c t x )   {  
         v a r   e   =   t h i s . e   | |   ( t h i s . e   =   { } ) ;  
  
         ( e [ n a m e ]   | |   ( e [ n a m e ]   =   [ ] ) ) . p u s h ( {  
             f n :   c a l l b a c k ,  
             c t x :   c t x  
         } ) ;  
  
         r e t u r n   t h i s ;  
     } ,  
  
     o n c e :   f u n c t i o n   ( n a m e ,   c a l l b a c k ,   c t x )   {  
         v a r   s e l f   =   t h i s ;  
         f u n c t i o n   l i s t e n e r   ( )   {  
             s e l f . o f f ( n a m e ,   l i s t e n e r ) ;  
             c a l l b a c k . a p p l y ( c t x ,   a r g u m e n t s ) ;  
         } ;  
  
         l i s t e n e r . _   =   c a l l b a c k  
         r e t u r n   t h i s . o n ( n a m e ,   l i s t e n e r ,   c t x ) ;  
     } ,  
  
     e m i t :   f u n c t i o n   ( n a m e )   {  
         v a r   d a t a   =   [ ] . s l i c e . c a l l ( a r g u m e n t s ,   1 ) ;  
         v a r   e v t A r r   =   ( ( t h i s . e   | |   ( t h i s . e   =   { } ) ) [ n a m e ]   | |   [ ] ) . s l i c e ( ) ;  
         v a r   i   =   0 ;  
         v a r   l e n   =   e v t A r r . l e n g t h ;  
  
         f o r   ( i ;   i   <   l e n ;   i + + )   {  
             e v t A r r [ i ] . f n . a p p l y ( e v t A r r [ i ] . c t x ,   d a t a ) ;  
         }  
  
         r e t u r n   t h i s ;  
     } ,  
  
     o f f :   f u n c t i o n   ( n a m e ,   c a l l b a c k )   {  
         v a r   e   =   t h i s . e   | |   ( t h i s . e   =   { } ) ;  
         v a r   e v t s   =   e [ n a m e ] ;  
         v a r   l i v e E v e n t s   =   [ ] ;  
  
         i f   ( e v t s   & &   c a l l b a c k )   {  
             f o r   ( v a r   i   =   0 ,   l e n   =   e v t s . l e n g t h ;   i   <   l e n ;   i + + )   {  
                 i f   ( e v t s [ i ] . f n   ! = =   c a l l b a c k   & &   e v t s [ i ] . f n . _   ! = =   c a l l b a c k )  
                     l i v e E v e n t s . p u s h ( e v t s [ i ] ) ;  
             }  
         }  
  
         / /   R e m o v e   e v e n t   f r o m   q u e u e   t o   p r e v e n t   m e m o r y   l e a k  
         / /   S u g g e s t e d   b y   h t t p s : / / g i t h u b . c o m / l a z d  
         / /   R e f :   h t t p s : / / g i t h u b . c o m / s c o t t c o r g a n / t i n y - e m i t t e r / c o m m i t / c 6 e b f a a 9 b c 9 7 3 b 3 3 d 1 1 0 a 8 4 a 3 0 7 7 4 2 b 7 c f 9 4 c 9 5 3 # c o m m i t c o m m e n t - 5 0 2 4 9 1 0  
  
         ( l i v e E v e n t s . l e n g t h )  
             ?   e [ n a m e ]   =   l i v e E v e n t s  
             :   d e l e t e   e [ n a m e ] ;  
  
         r e t u r n   t h i s ;  
     }  
 } ;  
  
 m o d u l e . e x p o r t s   =   E ;  
  
  
 / * * * /   } ) ,  
 / *   4   * /  
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ )   {  
  
 v a r   i s   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 5 ) ;  
 v a r   d e l e g a t e   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 6 ) ;  
  
 / * *  
   *   V a l i d a t e s   a l l   p a r a m s   a n d   c a l l s   t h e   r i g h t  
   *   l i s t e n e r   f u n c t i o n   b a s e d   o n   i t s   t a r g e t   t y p e .  
   *  
   *   @ p a r a m   { S t r i n g | H T M L E l e m e n t | H T M L C o l l e c t i o n | N o d e L i s t }   t a r g e t  
   *   @ p a r a m   { S t r i n g }   t y p e  
   *   @ p a r a m   { F u n c t i o n }   c a l l b a c k  
   *   @ r e t u r n   { O b j e c t }  
   * /  
 f u n c t i o n   l i s t e n ( t a r g e t ,   t y p e ,   c a l l b a c k )   {  
         i f   ( ! t a r g e t   & &   ! t y p e   & &   ! c a l l b a c k )   {  
                 t h r o w   n e w   E r r o r ( ' M i s s i n g   r e q u i r e d   a r g u m e n t s ' ) ;  
         }  
  
         i f   ( ! i s . s t r i n g ( t y p e ) )   {  
                 t h r o w   n e w   T y p e E r r o r ( ' S e c o n d   a r g u m e n t   m u s t   b e   a   S t r i n g ' ) ;  
         }  
  
         i f   ( ! i s . f n ( c a l l b a c k ) )   {  
                 t h r o w   n e w   T y p e E r r o r ( ' T h i r d   a r g u m e n t   m u s t   b e   a   F u n c t i o n ' ) ;  
         }  
  
         i f   ( i s . n o d e ( t a r g e t ) )   {  
                 r e t u r n   l i s t e n N o d e ( t a r g e t ,   t y p e ,   c a l l b a c k ) ;  
         }  
         e l s e   i f   ( i s . n o d e L i s t ( t a r g e t ) )   {  
                 r e t u r n   l i s t e n N o d e L i s t ( t a r g e t ,   t y p e ,   c a l l b a c k ) ;  
         }  
         e l s e   i f   ( i s . s t r i n g ( t a r g e t ) )   {  
                 r e t u r n   l i s t e n S e l e c t o r ( t a r g e t ,   t y p e ,   c a l l b a c k ) ;  
         }  
         e l s e   {  
                 t h r o w   n e w   T y p e E r r o r ( ' F i r s t   a r g u m e n t   m u s t   b e   a   S t r i n g ,   H T M L E l e m e n t ,   H T M L C o l l e c t i o n ,   o r   N o d e L i s t ' ) ;  
         }  
 }  
  
 / * *  
   *   A d d s   a n   e v e n t   l i s t e n e r   t o   a   H T M L   e l e m e n t  
   *   a n d   r e t u r n s   a   r e m o v e   l i s t e n e r   f u n c t i o n .  
   *  
   *   @ p a r a m   { H T M L E l e m e n t }   n o d e  
   *   @ p a r a m   { S t r i n g }   t y p e  
   *   @ p a r a m   { F u n c t i o n }   c a l l b a c k  
   *   @ r e t u r n   { O b j e c t }  
   * /  
 f u n c t i o n   l i s t e n N o d e ( n o d e ,   t y p e ,   c a l l b a c k )   {  
         n o d e . a d d E v e n t L i s t e n e r ( t y p e ,   c a l l b a c k ) ;  
  
         r e t u r n   {  
                 d e s t r o y :   f u n c t i o n ( )   {  
                         n o d e . r e m o v e E v e n t L i s t e n e r ( t y p e ,   c a l l b a c k ) ;  
                 }  
         }  
 }  
  
 / * *  
   *   A d d   a n   e v e n t   l i s t e n e r   t o   a   l i s t   o f   H T M L   e l e m e n t s  
   *   a n d   r e t u r n s   a   r e m o v e   l i s t e n e r   f u n c t i o n .  
   *  
   *   @ p a r a m   { N o d e L i s t | H T M L C o l l e c t i o n }   n o d e L i s t  
   *   @ p a r a m   { S t r i n g }   t y p e  
   *   @ p a r a m   { F u n c t i o n }   c a l l b a c k  
   *   @ r e t u r n   { O b j e c t }  
   * /  
 f u n c t i o n   l i s t e n N o d e L i s t ( n o d e L i s t ,   t y p e ,   c a l l b a c k )   {  
         A r r a y . p r o t o t y p e . f o r E a c h . c a l l ( n o d e L i s t ,   f u n c t i o n ( n o d e )   {  
                 n o d e . a d d E v e n t L i s t e n e r ( t y p e ,   c a l l b a c k ) ;  
         } ) ;  
  
         r e t u r n   {  
                 d e s t r o y :   f u n c t i o n ( )   {  
                         A r r a y . p r o t o t y p e . f o r E a c h . c a l l ( n o d e L i s t ,   f u n c t i o n ( n o d e )   {  
                                 n o d e . r e m o v e E v e n t L i s t e n e r ( t y p e ,   c a l l b a c k ) ;  
                         } ) ;  
                 }  
         }  
 }  
  
 / * *  
   *   A d d   a n   e v e n t   l i s t e n e r   t o   a   s e l e c t o r  
   *   a n d   r e t u r n s   a   r e m o v e   l i s t e n e r   f u n c t i o n .  
   *  
   *   @ p a r a m   { S t r i n g }   s e l e c t o r  
   *   @ p a r a m   { S t r i n g }   t y p e  
   *   @ p a r a m   { F u n c t i o n }   c a l l b a c k  
   *   @ r e t u r n   { O b j e c t }  
   * /  
 f u n c t i o n   l i s t e n S e l e c t o r ( s e l e c t o r ,   t y p e ,   c a l l b a c k )   {  
         r e t u r n   d e l e g a t e ( d o c u m e n t . b o d y ,   s e l e c t o r ,   t y p e ,   c a l l b a c k ) ;  
 }  
  
 m o d u l e . e x p o r t s   =   l i s t e n ;  
  
  
 / * * * /   } ) ,  
 / *   5   * /  
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s )   {  
  
 / * *  
   *   C h e c k   i f   a r g u m e n t   i s   a   H T M L   e l e m e n t .  
   *  
   *   @ p a r a m   { O b j e c t }   v a l u e  
   *   @ r e t u r n   { B o o l e a n }  
   * /  
 e x p o r t s . n o d e   =   f u n c t i o n ( v a l u e )   {  
         r e t u r n   v a l u e   ! = =   u n d e f i n e d  
                 & &   v a l u e   i n s t a n c e o f   H T M L E l e m e n t  
                 & &   v a l u e . n o d e T y p e   = = =   1 ;  
 } ;  
  
 / * *  
   *   C h e c k   i f   a r g u m e n t   i s   a   l i s t   o f   H T M L   e l e m e n t s .  
   *  
   *   @ p a r a m   { O b j e c t }   v a l u e  
   *   @ r e t u r n   { B o o l e a n }  
   * /  
 e x p o r t s . n o d e L i s t   =   f u n c t i o n ( v a l u e )   {  
         v a r   t y p e   =   O b j e c t . p r o t o t y p e . t o S t r i n g . c a l l ( v a l u e ) ;  
  
         r e t u r n   v a l u e   ! = =   u n d e f i n e d  
                 & &   ( t y p e   = = =   ' [ o b j e c t   N o d e L i s t ] '   | |   t y p e   = = =   ' [ o b j e c t   H T M L C o l l e c t i o n ] ' )  
                 & &   ( ' l e n g t h '   i n   v a l u e )  
                 & &   ( v a l u e . l e n g t h   = = =   0   | |   e x p o r t s . n o d e ( v a l u e [ 0 ] ) ) ;  
 } ;  
  
 / * *  
   *   C h e c k   i f   a r g u m e n t   i s   a   s t r i n g .  
   *  
   *   @ p a r a m   { O b j e c t }   v a l u e  
   *   @ r e t u r n   { B o o l e a n }  
   * /  
 e x p o r t s . s t r i n g   =   f u n c t i o n ( v a l u e )   {  
         r e t u r n   t y p e o f   v a l u e   = = =   ' s t r i n g '  
                 | |   v a l u e   i n s t a n c e o f   S t r i n g ;  
 } ;  
  
 / * *  
   *   C h e c k   i f   a r g u m e n t   i s   a   f u n c t i o n .  
   *  
   *   @ p a r a m   { O b j e c t }   v a l u e  
   *   @ r e t u r n   { B o o l e a n }  
   * /  
 e x p o r t s . f n   =   f u n c t i o n ( v a l u e )   {  
         v a r   t y p e   =   O b j e c t . p r o t o t y p e . t o S t r i n g . c a l l ( v a l u e ) ;  
  
         r e t u r n   t y p e   = = =   ' [ o b j e c t   F u n c t i o n ] ' ;  
 } ;  
  
  
 / * * * /   } ) ,  
 / *   6   * /  
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s ,   _ _ w e b p a c k _ r e q u i r e _ _ )   {  
  
 v a r   c l o s e s t   =   _ _ w e b p a c k _ r e q u i r e _ _ ( 7 ) ;  
  
 / * *  
   *   D e l e g a t e s   e v e n t   t o   a   s e l e c t o r .  
   *  
   *   @ p a r a m   { E l e m e n t }   e l e m e n t  
   *   @ p a r a m   { S t r i n g }   s e l e c t o r  
   *   @ p a r a m   { S t r i n g }   t y p e  
   *   @ p a r a m   { F u n c t i o n }   c a l l b a c k  
   *   @ p a r a m   { B o o l e a n }   u s e C a p t u r e  
   *   @ r e t u r n   { O b j e c t }  
   * /  
 f u n c t i o n   _ d e l e g a t e ( e l e m e n t ,   s e l e c t o r ,   t y p e ,   c a l l b a c k ,   u s e C a p t u r e )   {  
         v a r   l i s t e n e r F n   =   l i s t e n e r . a p p l y ( t h i s ,   a r g u m e n t s ) ;  
  
         e l e m e n t . a d d E v e n t L i s t e n e r ( t y p e ,   l i s t e n e r F n ,   u s e C a p t u r e ) ;  
  
         r e t u r n   {  
                 d e s t r o y :   f u n c t i o n ( )   {  
                         e l e m e n t . r e m o v e E v e n t L i s t e n e r ( t y p e ,   l i s t e n e r F n ,   u s e C a p t u r e ) ;  
                 }  
         }  
 }  
  
 / * *  
   *   D e l e g a t e s   e v e n t   t o   a   s e l e c t o r .  
   *  
   *   @ p a r a m   { E l e m e n t | S t r i n g | A r r a y }   [ e l e m e n t s ]  
   *   @ p a r a m   { S t r i n g }   s e l e c t o r  
   *   @ p a r a m   { S t r i n g }   t y p e  
   *   @ p a r a m   { F u n c t i o n }   c a l l b a c k  
   *   @ p a r a m   { B o o l e a n }   u s e C a p t u r e  
   *   @ r e t u r n   { O b j e c t }  
   * /  
 f u n c t i o n   d e l e g a t e ( e l e m e n t s ,   s e l e c t o r ,   t y p e ,   c a l l b a c k ,   u s e C a p t u r e )   {  
         / /   H a n d l e   t h e   r e g u l a r   E l e m e n t   u s a g e  
         i f   ( t y p e o f   e l e m e n t s . a d d E v e n t L i s t e n e r   = = =   ' f u n c t i o n ' )   {  
                 r e t u r n   _ d e l e g a t e . a p p l y ( n u l l ,   a r g u m e n t s ) ;  
         }  
  
         / /   H a n d l e   E l e m e n t - l e s s   u s a g e ,   i t   d e f a u l t s   t o   g l o b a l   d e l e g a t i o n  
         i f   ( t y p e o f   t y p e   = = =   ' f u n c t i o n ' )   {  
                 / /   U s e   ` d o c u m e n t `   a s   t h e   f i r s t   p a r a m e t e r ,   t h e n   a p p l y   a r g u m e n t s  
                 / /   T h i s   i s   a   s h o r t   w a y   t o   . u n s h i f t   ` a r g u m e n t s `   w i t h o u t   r u n n i n g   i n t o   d e o p t i m i z a t i o n s  
                 r e t u r n   _ d e l e g a t e . b i n d ( n u l l ,   d o c u m e n t ) . a p p l y ( n u l l ,   a r g u m e n t s ) ;  
         }  
  
         / /   H a n d l e   S e l e c t o r - b a s e d   u s a g e  
         i f   ( t y p e o f   e l e m e n t s   = = =   ' s t r i n g ' )   {  
                 e l e m e n t s   =   d o c u m e n t . q u e r y S e l e c t o r A l l ( e l e m e n t s ) ;  
         }  
  
         / /   H a n d l e   A r r a y - l i k e   b a s e d   u s a g e  
         r e t u r n   A r r a y . p r o t o t y p e . m a p . c a l l ( e l e m e n t s ,   f u n c t i o n   ( e l e m e n t )   {  
                 r e t u r n   _ d e l e g a t e ( e l e m e n t ,   s e l e c t o r ,   t y p e ,   c a l l b a c k ,   u s e C a p t u r e ) ;  
         } ) ;  
 }  
  
 / * *  
   *   F i n d s   c l o s e s t   m a t c h   a n d   i n v o k e s   c a l l b a c k .  
   *  
   *   @ p a r a m   { E l e m e n t }   e l e m e n t  
   *   @ p a r a m   { S t r i n g }   s e l e c t o r  
   *   @ p a r a m   { S t r i n g }   t y p e  
   *   @ p a r a m   { F u n c t i o n }   c a l l b a c k  
   *   @ r e t u r n   { F u n c t i o n }  
   * /  
 f u n c t i o n   l i s t e n e r ( e l e m e n t ,   s e l e c t o r ,   t y p e ,   c a l l b a c k )   {  
         r e t u r n   f u n c t i o n ( e )   {  
                 e . d e l e g a t e T a r g e t   =   c l o s e s t ( e . t a r g e t ,   s e l e c t o r ) ;  
  
                 i f   ( e . d e l e g a t e T a r g e t )   {  
                         c a l l b a c k . c a l l ( e l e m e n t ,   e ) ;  
                 }  
         }  
 }  
  
 m o d u l e . e x p o r t s   =   d e l e g a t e ;  
  
  
 / * * * /   } ) ,  
 / *   7   * /  
 / * * * /   ( f u n c t i o n ( m o d u l e ,   e x p o r t s )   {  
  
 v a r   D O C U M E N T _ N O D E _ T Y P E   =   9 ;  
  
 / * *  
   *   A   p o l y f i l l   f o r   E l e m e n t . m a t c h e s ( )  
   * /  
 i f   ( t y p e o f   E l e m e n t   ! = =   ' u n d e f i n e d '   & &   ! E l e m e n t . p r o t o t y p e . m a t c h e s )   {  
         v a r   p r o t o   =   E l e m e n t . p r o t o t y p e ;  
  
         p r o t o . m a t c h e s   =   p r o t o . m a t c h e s S e l e c t o r   | |  
                                         p r o t o . m o z M a t c h e s S e l e c t o r   | |  
                                         p r o t o . m s M a t c h e s S e l e c t o r   | |  
                                         p r o t o . o M a t c h e s S e l e c t o r   | |  
                                         p r o t o . w e b k i t M a t c h e s S e l e c t o r ;  
 }  
  
 / * *  
   *   F i n d s   t h e   c l o s e s t   p a r e n t   t h a t   m a t c h e s   a   s e l e c t o r .  
   *  
   *   @ p a r a m   { E l e m e n t }   e l e m e n t  
   *   @ p a r a m   { S t r i n g }   s e l e c t o r  
   *   @ r e t u r n   { F u n c t i o n }  
   * /  
 f u n c t i o n   c l o s e s t   ( e l e m e n t ,   s e l e c t o r )   {  
         w h i l e   ( e l e m e n t   & &   e l e m e n t . n o d e T y p e   ! = =   D O C U M E N T _ N O D E _ T Y P E )   {  
                 i f   ( t y p e o f   e l e m e n t . m a t c h e s   = = =   ' f u n c t i o n '   & &  
                         e l e m e n t . m a t c h e s ( s e l e c t o r ) )   {  
                     r e t u r n   e l e m e n t ;  
                 }  
                 e l e m e n t   =   e l e m e n t . p a r e n t N o d e ;  
         }  
 }  
  
 m o d u l e . e x p o r t s   =   c l o s e s t ;  
  
  
 / * * * /   } )  
 / * * * * * * /   ] ) ;  
 } ) ;  
 