package com.takima.backskeleton.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "products")
@Getter
@Setter
@NoArgsConstructor
public class Products {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "products_product_id_seq")
    private int productId;
    private String name;
    private String description;
    private String imageLink;
    private double price;
    private int stockQuantity;
}
