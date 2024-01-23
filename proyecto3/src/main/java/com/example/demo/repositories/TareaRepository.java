package com.example.demo.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.models.TareaModel;

@Repository
public interface TareaRepository extends JpaRepository<TareaModel, Integer> {

	@Query("SELECT t FROM TareaModel t WHERE t.estado = true")
    List<TareaModel> findEliminadas();
}


//repositorio.save(objeto)
//repositorio.delete()
//findAll
//findById(id)
//deleteById(id)
//updateById(id)