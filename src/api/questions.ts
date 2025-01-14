

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
    const response = await fetch('https://mocki.io/v1/ab5c96ae-6ce1-4367-9ce1-7de8eb6aed7d');

    if (!response.ok) {
        throw new Error('Failed to fetch questions');
    }

    return response.json();
}
