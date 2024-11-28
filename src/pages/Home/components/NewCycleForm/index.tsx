import {FormContainer, TaskInput, MinutesAmountInput } from './styles';
import { useContext } from 'react';
import { CyclesContext } from '../../../../contexts/CyclesContext';
import { useFormContext } from 'react-hook-form';


export function NewCycleForm(){
    const {activeCycle} = useContext(CyclesContext);
    const {register} = useFormContext();
    return(
        <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                        id="task" 
                        list="task-suggestions" 
                        placeholder="Dê um nome para o seu projeto"
                        disabled={!!activeCycle}
                        {...register('task')}
                    />

                    <datalist id="task-suggestions">
                        <option value="Teste 1"/>
                        <option value="b 2"/>
                        <option value="Teste 3"/>
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput 
                        type="number" 
                        id="minutesAmount" 
                        placeholder="00"
                        step={1}
                        min={1}
                        max={60}
                        disabled={!!activeCycle}
                        {...register('minutesAmount', {valueAsNumber: true})}
                    />

                    <span>minutos.</span>
                </FormContainer>
    )
}