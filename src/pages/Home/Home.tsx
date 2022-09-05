import { Play, TrademarkRegistered } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeContainer, MinuteAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";
import { useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";


const newCycleValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a Tarefa"),
    minutesAmount: zod.number().min(5).max(60),
});

interface NewCycleFormData {
    task: string;
    minutesAmount: number;
}


export function Home() {


    

    const { register, handleSubmit, watch} = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleValidationSchema),
        defaultValues: {
            task: "",
            minutesAmount: 0,
        },
    });
    
    function handleCreateNewCycle(data: NewCycleFormData) {
        console.log(data);
        
    }

 const task = watch('task');
 const isSubmitDisabled = !task
  
    

    return (
        <HomeContainer>
            <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
               <FormContainer>
                <label htmlFor="task">Vou trabalhar em</label>

                <TaskInput 
                id="task" 
                placeholder="Dê um nome para o seu projeto" 
                list="task-suggestion"
                {...register("task")}
                />

                <datalist id="task-suggestion">
                    <option value="Projeto 1" />
                    <option value="Projeto 2" />
                    <option value="Projeto 3" />
                    <option value="Projeto 4" />
                </datalist>

                <label htmlFor="minutesAmount">durante</label>

                <MinuteAmountInput 
                type="number" 
                id="minutesAmount" 
                placeholder="00"
                step={5} // pula o contador de 5 em 5min.
                min={5}
                max={60}
                {...register("minutesAmount", {valueAsNumber: true})}
                />

                <span>minutos</span>         
              </FormContainer> 

            <CountDownContainer>
                <span>0</span>
                <span>0</span>
                <Separator>:</Separator>
                <span>0</span>
                <span>0</span>  
            </CountDownContainer>

            <StartCountdownButton disabled = {isSubmitDisabled} type="submit">
                <Play size={24}/>
                Começar
            </StartCountdownButton>
            </form>
        </HomeContainer>
        
    );
}

function watch(arg0: string) {
    throw new Error("Function not implemented.");
}
