package br.unicesumar.restserver.disciplina;

import br.unicesumar.restserver.disciplina.Disciplina;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Alunos
 */
@RestController
@RequestMapping("/disciplina")
@Transactional
public class DisciplinaController {

    @Autowired
    private EntityManager em;


    public List<Disciplina> getDisciplina() {
        return null;
    }
    
    public void incluirDisciplina(@RequestBody Disciplina disciplina) {
    }        
    
    public void editarDisciplina(@RequestBody Disciplina disciplina) {
    }        
    
    public void excluirDisciplina(@PathVariable Long id) {
    }        
    
    
    
}
