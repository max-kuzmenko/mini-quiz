

export type TAnswer = {
    text: string;
    id: string;
}

export type TQuestion = {
    id: string;
    type: 'single_select' | 'multi_select';
    question: string;
    answers: TAnswer[];
}

export const getQuestions = async (): Promise<TQuestion[]> => {
    const response = await fetch('https://mocki.io/v1/8bc53604-afb0-4ba0-9303-69302a963b79');

    if (!response.ok) {
        throw new Error('Failed to fetch questions');
    }

    return response.json();
}