PGDMP         #                {            dbTestHotel    14.2    14.2 >    6           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            7           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            8           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            9           1262    36024    dbTestHotel    DATABASE     q   CREATE DATABASE "dbTestHotel" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'English_United States.1252';
    DROP DATABASE "dbTestHotel";
                postgres    false            �            1259    36222 	   apartment    TABLE     �   CREATE TABLE public.apartment (
    id integer NOT NULL,
    "nameApartment" character varying(255),
    "numberApartment" integer,
    "descriptionApartment" character varying(255),
    "idHotel" integer
);
    DROP TABLE public.apartment;
       public         heap    postgres    false            �            1259    36221    apartment_id_seq    SEQUENCE     �   CREATE SEQUENCE public.apartment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.apartment_id_seq;
       public          postgres    false    220            :           0    0    apartment_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.apartment_id_seq OWNED BY public.apartment.id;
          public          postgres    false    219            �            1259    36196    hotel    TABLE     �   CREATE TABLE public.hotel (
    id integer NOT NULL,
    name character varying(255),
    "descriptionHotel" character varying(255)
);
    DROP TABLE public.hotel;
       public         heap    postgres    false            �            1259    36236    hotelProfile    TABLE     �   CREATE TABLE public."hotelProfile" (
    id integer NOT NULL,
    "idApartment" integer,
    "idProfile" integer,
    checkin date,
    checkout date
);
 "   DROP TABLE public."hotelProfile";
       public         heap    postgres    false            �            1259    36235    hotelProfile_id_seq    SEQUENCE     �   CREATE SEQUENCE public."hotelProfile_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public."hotelProfile_id_seq";
       public          postgres    false    222            ;           0    0    hotelProfile_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public."hotelProfile_id_seq" OWNED BY public."hotelProfile".id;
          public          postgres    false    221            �            1259    36195    hotel_id_seq    SEQUENCE     �   CREATE SEQUENCE public.hotel_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.hotel_id_seq;
       public          postgres    false    218            <           0    0    hotel_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.hotel_id_seq OWNED BY public.hotel.id;
          public          postgres    false    217            �            1259    36081    profile    TABLE     �   CREATE TABLE public.profile (
    id integer NOT NULL,
    "firstName" character varying(255),
    "secondName" character varying(255),
    telephone character varying(255),
    login character varying(255),
    "userId" integer,
    vip boolean
);
    DROP TABLE public.profile;
       public         heap    postgres    false            �            1259    36080    profile_id_seq    SEQUENCE     �   CREATE SEQUENCE public.profile_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.profile_id_seq;
       public          postgres    false    216            =           0    0    profile_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.profile_id_seq OWNED BY public.profile.id;
          public          postgres    false    215            �            1259    36026    role    TABLE     �   CREATE TABLE public.role (
    id integer NOT NULL,
    value character varying(255),
    description character varying(255)
);
    DROP TABLE public.role;
       public         heap    postgres    false            �            1259    36025    role_id_seq    SEQUENCE     �   CREATE SEQUENCE public.role_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.role_id_seq;
       public          postgres    false    210            >           0    0    role_id_seq    SEQUENCE OWNED BY     ;   ALTER SEQUENCE public.role_id_seq OWNED BY public.role.id;
          public          postgres    false    209            �            1259    36035    user    TABLE        CREATE TABLE public."user" (
    id integer NOT NULL,
    login character varying(255),
    password character varying(255)
);
    DROP TABLE public."user";
       public         heap    postgres    false            �            1259    36034    user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    212            ?           0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    211            �            1259    36046 
   user_roles    TABLE     h   CREATE TABLE public.user_roles (
    id integer NOT NULL,
    "roleId" integer,
    "userId" integer
);
    DROP TABLE public.user_roles;
       public         heap    postgres    false            �            1259    36045    user_roles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.user_roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.user_roles_id_seq;
       public          postgres    false    214            @           0    0    user_roles_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.user_roles_id_seq OWNED BY public.user_roles.id;
          public          postgres    false    213                       2604    36225    apartment id    DEFAULT     l   ALTER TABLE ONLY public.apartment ALTER COLUMN id SET DEFAULT nextval('public.apartment_id_seq'::regclass);
 ;   ALTER TABLE public.apartment ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    220    219    220            ~           2604    36199    hotel id    DEFAULT     d   ALTER TABLE ONLY public.hotel ALTER COLUMN id SET DEFAULT nextval('public.hotel_id_seq'::regclass);
 7   ALTER TABLE public.hotel ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    217    218            �           2604    36239    hotelProfile id    DEFAULT     v   ALTER TABLE ONLY public."hotelProfile" ALTER COLUMN id SET DEFAULT nextval('public."hotelProfile_id_seq"'::regclass);
 @   ALTER TABLE public."hotelProfile" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    221    222            }           2604    36084 
   profile id    DEFAULT     h   ALTER TABLE ONLY public.profile ALTER COLUMN id SET DEFAULT nextval('public.profile_id_seq'::regclass);
 9   ALTER TABLE public.profile ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    215    216            z           2604    36029    role id    DEFAULT     b   ALTER TABLE ONLY public.role ALTER COLUMN id SET DEFAULT nextval('public.role_id_seq'::regclass);
 6   ALTER TABLE public.role ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    210    210            {           2604    36038    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    211    212            |           2604    36049    user_roles id    DEFAULT     n   ALTER TABLE ONLY public.user_roles ALTER COLUMN id SET DEFAULT nextval('public.user_roles_id_seq'::regclass);
 <   ALTER TABLE public.user_roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    214    214            1          0    36222 	   apartment 
   TABLE DATA           n   COPY public.apartment (id, "nameApartment", "numberApartment", "descriptionApartment", "idHotel") FROM stdin;
    public          postgres    false    220   &E       /          0    36196    hotel 
   TABLE DATA           =   COPY public.hotel (id, name, "descriptionHotel") FROM stdin;
    public          postgres    false    218   �E       3          0    36236    hotelProfile 
   TABLE DATA           [   COPY public."hotelProfile" (id, "idApartment", "idProfile", checkin, checkout) FROM stdin;
    public          postgres    false    222   �E       -          0    36081    profile 
   TABLE DATA           a   COPY public.profile (id, "firstName", "secondName", telephone, login, "userId", vip) FROM stdin;
    public          postgres    false    216   ,F       '          0    36026    role 
   TABLE DATA           6   COPY public.role (id, value, description) FROM stdin;
    public          postgres    false    210   tF       )          0    36035    user 
   TABLE DATA           5   COPY public."user" (id, login, password) FROM stdin;
    public          postgres    false    212   �F       +          0    36046 
   user_roles 
   TABLE DATA           <   COPY public.user_roles (id, "roleId", "userId") FROM stdin;
    public          postgres    false    214   pG       A           0    0    apartment_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.apartment_id_seq', 4, true);
          public          postgres    false    219            B           0    0    hotelProfile_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public."hotelProfile_id_seq"', 17, true);
          public          postgres    false    221            C           0    0    hotel_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.hotel_id_seq', 2, true);
          public          postgres    false    217            D           0    0    profile_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.profile_id_seq', 2, true);
          public          postgres    false    215            E           0    0    role_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.role_id_seq', 2, true);
          public          postgres    false    209            F           0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 2, true);
          public          postgres    false    211            G           0    0    user_roles_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.user_roles_id_seq', 2, true);
          public          postgres    false    213            �           2606    36229    apartment apartment_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.apartment
    ADD CONSTRAINT apartment_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.apartment DROP CONSTRAINT apartment_pkey;
       public            postgres    false    220            �           2606    36241    hotelProfile hotelProfile_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public."hotelProfile"
    ADD CONSTRAINT "hotelProfile_pkey" PRIMARY KEY (id);
 L   ALTER TABLE ONLY public."hotelProfile" DROP CONSTRAINT "hotelProfile_pkey";
       public            postgres    false    222            �           2606    36203    hotel hotel_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.hotel
    ADD CONSTRAINT hotel_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.hotel DROP CONSTRAINT hotel_pkey;
       public            postgres    false    218            �           2606    36088    profile profile_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.profile
    ADD CONSTRAINT profile_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.profile DROP CONSTRAINT profile_pkey;
       public            postgres    false    216            �           2606    36090    profile profile_userId_key 
   CONSTRAINT     [   ALTER TABLE ONLY public.profile
    ADD CONSTRAINT "profile_userId_key" UNIQUE ("userId");
 F   ALTER TABLE ONLY public.profile DROP CONSTRAINT "profile_userId_key";
       public            postgres    false    216            �           2606    36033    role role_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.role
    ADD CONSTRAINT role_pkey PRIMARY KEY (id);
 8   ALTER TABLE ONLY public.role DROP CONSTRAINT role_pkey;
       public            postgres    false    210            �           2606    36044    user user_login_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_login_key UNIQUE (login);
 ?   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_login_key;
       public            postgres    false    212            �           2606    36042    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    212            �           2606    36051    user_roles user_roles_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT user_roles_pkey;
       public            postgres    false    214            �           2606    36053 '   user_roles user_roles_roleId_userId_key 
   CONSTRAINT     r   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_roleId_userId_key" UNIQUE ("roleId", "userId");
 S   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT "user_roles_roleId_userId_key";
       public            postgres    false    214    214            �           2606    36230     apartment apartment_idHotel_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.apartment
    ADD CONSTRAINT "apartment_idHotel_fkey" FOREIGN KEY ("idHotel") REFERENCES public.hotel(id) ON UPDATE CASCADE;
 L   ALTER TABLE ONLY public.apartment DROP CONSTRAINT "apartment_idHotel_fkey";
       public          postgres    false    3216    220    218            �           2606    36242 *   hotelProfile hotelProfile_idApartment_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."hotelProfile"
    ADD CONSTRAINT "hotelProfile_idApartment_fkey" FOREIGN KEY ("idApartment") REFERENCES public.apartment(id) ON UPDATE CASCADE;
 X   ALTER TABLE ONLY public."hotelProfile" DROP CONSTRAINT "hotelProfile_idApartment_fkey";
       public          postgres    false    220    222    3218            �           2606    36247 (   hotelProfile hotelProfile_idProfile_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public."hotelProfile"
    ADD CONSTRAINT "hotelProfile_idProfile_fkey" FOREIGN KEY ("idProfile") REFERENCES public.profile(id) ON UPDATE CASCADE;
 V   ALTER TABLE ONLY public."hotelProfile" DROP CONSTRAINT "hotelProfile_idProfile_fkey";
       public          postgres    false    222    216    3212            �           2606    36091    profile profile_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.profile
    ADD CONSTRAINT "profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 G   ALTER TABLE ONLY public.profile DROP CONSTRAINT "profile_userId_fkey";
       public          postgres    false    216    3206    212            �           2606    36054 !   user_roles user_roles_roleId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES public.role(id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT "user_roles_roleId_fkey";
       public          postgres    false    214    3202    210            �           2606    36059 !   user_roles user_roles_userId_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT "user_roles_userId_fkey" FOREIGN KEY ("userId") REFERENCES public."user"(id) ON UPDATE CASCADE ON DELETE CASCADE;
 M   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT "user_roles_userId_fkey";
       public          postgres    false    3206    212    214            1   g   x�u���0�s2"�q�8!��r�;���K��d3�ΘC,7�G�*6�8�cS'o��3`bM/��3[v�/Ro��i)�9bc��ҳ�"uU��7Fj�      /   ;   x�3�0�b�ņ�/l����X�ˈ����.l��ta+P|ǅ�6BTp�hq��qqq (��      3   4   x�Mɱ  �����IU�1�#�,�AC��ک�&�y�����8�����      -   8   x�3�H-�L�E�e��斆FP!C�.#ΰ���J0���
S 4�L����� �w�      '   M   x�3�tt���㼰�{.츰����.6\�p��¾�\F����A��_�wa�Şہ�&��V�+F��� ��(�      )   �   x�5���   г|�g'̚W�ZӴcʺ��4�}}��<����J�E��w�D�g!O57��QMh�K�}�1^�c�3��K��Ҳ��r�?�u���ꊅ���d��JP?��j4{�觬��%hz�C �0�+�      +      x�3�4�4�2�F\1z\\\ '     