package com.exmaple.flory.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "group")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Group {

    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int groupId;

    @Column(name = "name", length = 20, nullable = false)
    private String name;

}
