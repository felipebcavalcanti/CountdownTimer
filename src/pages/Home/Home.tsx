import { Play, TrademarkRegistered } from "phosphor-react";
import { CountDownContainer, FormContainer, HomeContainer, MinuteAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";
import { useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useEffect, useState } from "react";
import { differenceInSeconds} from "date-fns";

const newCycleValidationSchema = zod.object({
    task: zod.string().min(1, "Informe a Tarefa"),
    minutesAmount: zod.number().min(5).max(60),
});

interface NewCycleFormData {
    task: string;
    minutesAmount: number;
}

interface Cycles {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
}

export function Home() {

     const [cycles, setCycles] = useState<Cycles[]>([]);
     const [activeCyclesId, setActiveCyclesId] = useState<string | null>(null);   
     const [amoutSecondPassed, setAmoutSecondPassed] = useState(0);

    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleValidationSchema),
        defaultValues: {
            task: "",
            minutesAmount: 0,
        },
    });

    const activeCycle = cycles.find((cycle) => cycle.id == activeCyclesId);   

    useEffect(() => {
        let interval: number;

        if (activeCycle) {
            interval = setInterval(() => {
                setAmoutSecondPassed(
                    differenceInSeconds(new Date(), activeCycle.startDate),
             )
            }, 1000)

        }

        return () => {
            clearInterval(interval);
        }

    }, [activeCycle]);

    
    function handleCreateNewCycle(data: NewCycleFormData) {
        
        const newCycle: Cycles = {
            id: String(new Date().getTime()),
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),

        }

        setCycles((state) => [...state, newCycle]);
        setActiveCyclesId(String(new Date().getTime()));
        reset();
        
    }



        const totalSecond = activeCycle ? activeCycle.minutesAmount * 60 : 0;
        const currentSecond = activeCycle ? totalSecond - amoutSecondPassed : 0;

        const minutesAmount = Math.floor(currentSecond / 60 );
        const secondAmount = minutesAmount % 60; // o Resto de 60 minutos

        const minutes = String(minutesAmount).padStart(2, '0'); // o padding start inclui os caracteres dos minutos
        const seconds = String(secondAmount).padStart(2, '0');

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
                <span>{minutes[0]}</span>
                <span>{minutes[1]}</span>
                <Separator>:</Separator>
                <span>{seconds[0]}</span>
                <span>{seconds[1]}</span>  
            </CountDownContainer>

            <StartCountdownButton disabled = {isSubmitDisabled} type="submit">
                <Play size={24}/>
                Começar
            </StartCountdownButton>
            </form>
        </HomeContainer>
        
    );
}

